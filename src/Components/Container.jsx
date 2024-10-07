import React, { useContext } from 'react'
import { DataContext } from '../App'
// import '../App.css'

function Container({ children }) {
  //use the data from the useContext
  const [data, setData] = useContext(DataContext)
  return (
    <div className='w-[80%] h-[500px] bg-blue-500 text-white m-auto'>
      {children}
      {data}
    </div>
  )
}

export default Container
