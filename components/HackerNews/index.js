import { useContext } from "react";
import { List } from 'antd'
import { HackerContext } from "../../contexts/HackerContext";

export default () => {
  const { state, dispatch } = useContext(HackerContext)
  return (<List
    size="small"
    bordered
    dataSource={state.news}
    renderItem={item => (<List.Item>{item.title}</List.Item>)}
  />)
}


