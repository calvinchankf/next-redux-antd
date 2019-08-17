import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from '../../components/Header'
// redux
import { Provider } from 'react-redux'
import { makeStore } from '../../store'
const store = makeStore()

// code spliting
const Home = React.lazy(() => import('../Home'))
const Counter = React.lazy(() => import('../Counter'))
const NoMatch = React.lazy(() => import('../NoMatch'))
const Topics = React.lazy(() => import('../Topics'))

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/counter" component={Counter} />
                        <Route path="/topics" component={Topics} />
                        <Route component={NoMatch} />
                    </Switch>
                </Suspense>
            </Router>
        </Provider>
    );
}



export default App;