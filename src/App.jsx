import React, { useContext, useState } from 'react'
import Forms from './Forms'
import Practise from './Practise'
import Reacthook from './Reacthook'
import Child from './Components/Child'
import Container from './Components/Container'

//steps 1 create the useContext

export const DataContext = useContext(null)


function App() {

  const [data, setData] = useState('importan')

  return (
//steps 2 provide the data

    <DataContext.provider value={[data, setData]}>

      <div className='w-screen h-screen bg-gray-100'>
        {/* <Forms /> */}
        <br />
        <br />
        <div className="w-full h-1 bg-black"></div>
        <h1 className='text-4xl capitalize m-10'>this is my practise section</h1>
        <br />
        {/* <Practise /> */}
        {/* <Reacthook /> */}
        <button></button>
        <Child info='nothing'>
          <h1 className='hed'>this is child</h1>
        </Child>

        <Container>
          <h1>this is container</h1>
        </Container>
      </div>

    </DataContext.provider>
  )
}

export default App
