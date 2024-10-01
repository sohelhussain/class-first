import React, { useState } from 'react'
import Forms from './Forms'
import Practise from './Practise'
import Reacthook from './Reacthook'

function App() {


  return (
    <div className='w-screen h-screen bg-gray-100'>
      {/* <Forms /> */}
      <br />
      <br />
      <div className="w-full h-1 bg-black"></div>
      <h1 className='text-4xl capitalize m-10'>this is my practise section</h1>
      <br />
      {/* <Practise /> */}
      <Reacthook />
      <button></button>
    </div>
  )
}

export default App