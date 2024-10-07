import React from 'react'
import second from './Child.module.css'
function Child(props) {
    console.log(props);
    console.log(props);
  return (
    <div>
        {props.children}
        <h1 className={`${second.heading}`}>this is child</h1>
    </div>
  )
}

export default Child