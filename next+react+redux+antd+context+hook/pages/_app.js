import React from 'react'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper'
import { makeStore } from 'store'
import Router from 'next/router'
// nextjs helper which injects head meta
import Head from 'next/head'

// it is not a good practice
// cos it is a workaround for the unresolved issue: Developing locally requires a page refresh to render styles
// - https://github.com/zeit/next-plugins/issues/282#issuecomment-480740246
// - https://github.com/zeit/next-plugins/issues/484
if (process.env.NODE_ENV !== 'production') {
  Router.events.on('routeChangeComplete', () => {
    const path = '/_next/static/css/styles.chunk.css'
    const chunksSelector = `link[href*="${path}"]`
    const chunksNodes = document.querySelectorAll(chunksSelector)
    const timestamp = new Date().valueOf()
    chunksNodes[0].href = `${path}?${timestamp}`
  })
}

export default withRedux(makeStore)(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
      }
    }

    render() {
      const { Component, pageProps, store } = this.props
      return (
        <div>
          <Head>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          </Head>
          <Container>
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </Container>
        </div>
      )
    }
  }
)
