import React, { useState } from 'react'
import Forms from './Forms'
import Practise from './Practise'

function App() {


  return (
    <div className='w-screen h-screen bg-gray-100'>
      {/* <Forms /> */}
      <Practise />
      <br />
      <br />
      <div className="w-full h-1 bg-black"></div>
      <h1 className='text-4xl capitalize m-10'>this is my practise section</h1>
    </div>
  )
}

export default App