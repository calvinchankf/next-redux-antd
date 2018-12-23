// components
import { useState } from 'react'
import Header from 'components/Header'

export default () => {
  const [click, setClick] = useState(0);
  return (<div>
    <Header />
    <div> Welcome to hook </div>
    <button onClick={() => setClick(click + 1)} > + </button>
    <div> {click} </div>
    <button onClick={() => setClick(click - 1)} > - </button>
  </div>
  )
}