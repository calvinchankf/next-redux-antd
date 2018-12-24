// components
import { useState, useReducer, useEffect } from 'react'
import { List } from 'antd';
import Header from 'components/Header'

import { get } from 'utils/request'

const initialState = {
  data: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_LIST':
      return { data: action.payload }
    case 'CLEAN_LIST':
      return initialState
    default:
      return state;
  }
}

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    const result = await get(
      'http://hn.algolia.com/api/v1/search?query=redux',
    );
    dispatch({
      type: 'FETCH_LIST',
      payload: result.hits
    })
  }

  useEffect(() => {
    fetchData()
  }, []);

  const list = (<List
    size="small"
    bordered
    dataSource={state.data}
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