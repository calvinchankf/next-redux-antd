import { useState, useReducer, useEffect } from 'react'
// components
import Header from 'components/Header'
// context + hooks
import { fetchHackerNews } from 'api/hacker'
import { HackerContext } from "contexts/HackerContext";
import { hackerInitState, hackerReducer } from 'reducers/hacker'
import HackerNews from 'components/HackerNews'

export default () => {
  const [state, dispatch] = useReducer(hackerReducer, hackerInitState);

  const fetchData = async () => {
    await fetchHackerNews(dispatch)
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <HackerContext.Provider value={{ state, dispatch }}>
      <Header />
      <div> Welcome to Hacker News </div>
      <HackerNews />
    </HackerContext.Provider>
  )
}