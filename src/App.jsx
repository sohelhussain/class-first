import React, { useState } from 'react'

function App() {


  const x = [{name:'sohel hussain'}]

  const y = x.map((item, index)=> {
    return item
  })
  // console.log(y);


  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const handleClick = () => {
    console.log(time);
  }
  
  setInterval(e => {
    setTime(new Date().toLocaleTimeString())
  },1000)

  return (
    <div>
      <h1>Hello World</h1>
      <p>This is a React Class Component</p>
      {/* <h1>{x.map(item => item)}</h1> */}

      <h2>{time}</h2>
      <button onClick={handleClick}>click</button>
      <br />
    </div>
  )
}

export default App