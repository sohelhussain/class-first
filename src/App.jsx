import React, { useState } from 'react'

function App() {
  const [value, setValue] = useState('');
  const formHndler = (e) => {
    e.preventDefault();
  }

  const [error, setError] = useState(true);
  const [gender, setGender] = useState('other');

  return (
    <div className='w-screen h-screen bg-gray-100'>
      <form>
        <input onInput={e => e.target.value.length < 5 ? setError(true) : setError(false)} onChange={e => setValue(e.target.value)} name='name' type='text' placeholder='Enter your name' value={value} />
        {error && <p className='text-red-400'>Please enter your name</p>}

        <input type="radio" name="other" defaultValue='other' checked={gender === 'other' ? true : false} onChange={e => setGender(e.target.value)}/>
        <input type="radio" name="female" defaultValue='female' checked={gender === 'female' ? true : false} onChange={e => setGender(e.target.value)}/>
        <input type="radio" name="male" defaultValue='male' checked={gender === 'male' ? true : false} onChange={e => setGender(e.target.value)}/>


        <button onClick={formHndler}>Submit</button>
      </form>
    </div>
  )
}

export default App