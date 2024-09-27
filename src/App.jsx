import React, { useState } from 'react'

function App() {
  const [value, setValue] = useState('');
  const formHndler = (e) => {
    e.preventDefault();
  }

  const [error, setError] = useState(true);

  return (
    <div className='w-screen h-screen bg-gray-100'>
      <form>
        <input onInput={e => e.target.value.length < 5 ? setError(true) : setError(false)} onChange={e => setValue(e.target.value)} name='name' type='text' placeholder='Enter your name' value={value} />
        {error && <p>Please enter your name</p>}
        <button onClick={formHndler}>Submit</button>
      </form>
    </div>
  )
}

export default App