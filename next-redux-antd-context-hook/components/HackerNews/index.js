import { useContext } from "react";
import { List } from 'antd'
import { HackerContext } from "../../contexts/HackerContext";

export default () => {
  // useContext
  // 1. read the context
  // 2. subscribe the component to get updates from context
  // therefore i dont need to wrap the component with <HackerContext.Consumer>
  const { state, dispatch } = useContext(HackerContext)
  return (<List
    size="small"
    bordered
    dataSource={state.news}
    renderItem={item => (<List.Item>{item.title}</List.Item>)}
  />)
}


