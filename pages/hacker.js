import { useState, useReducer, useEffect } from 'react'
import { List } from 'antd'
// components
import Header from 'components/Header'
import { fetchHackerNews } from 'api/hacker'
import { hackerInitState, hackerReducer } from 'reducers/hacker'

export default () => {
  const [state, dispatch] = useReducer(hackerReducer, hackerInitState);

  const fetchData = async () => {
    await fetchHackerNews(dispatch)
  }

  useEffect(() => {
    fetchData()
  }, []);

  const list = (<List
    size="small"
    bordered
    dataSource={state.news}
    renderItem={item => (<List.Item>{item.title}</List.Item>)}
  />)

  return (
    <div>
      <Header />
      <div> Welcome to Hacker News </div>
      {list}
    </div>
  )
}