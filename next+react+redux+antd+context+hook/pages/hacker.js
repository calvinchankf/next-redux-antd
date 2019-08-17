import { useState, useReducer, useEffect } from 'react'
// components
import Header from 'components/Header'
import Footer from 'components/Footer'
// context + hooks
import { fetchHackerNews } from 'api/hacker'
import { HackerContext } from "contexts/HackerContext";
import { hackerInitState, hackerReducer } from 'reducers/hacker'
import HackerNews from 'components/HackerNews'

import { Button } from 'antd'

export default () => {
  const [state, dispatch] = useReducer(hackerReducer, hackerInitState);

  const fetchData = async () => {
    await fetchHackerNews(state, dispatch)
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <HackerContext.Provider value={{ state, dispatch }}>
      <Header />
      <div> Welcome to Hacker News </div>
      <HackerNews />
      <Button style={{ margin: 16 }} type="dashed" onClick={fetchData}>Load More</Button>
      <Footer />
    </HackerContext.Provider>
  )
}