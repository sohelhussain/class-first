import React, { useState } from 'react'
// import '../src/Components/app.css'

function Forms() {
  const [value, setValue] = useState('');
  const formHndler = (e) => {
    e.preventDefault();
  }

  const [name, setName] = useState('20');
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

        <input type="checkbox" name="20" defaultChecked='20' checked={name === '20' ? true : false} onChange={e => setName(e.target.value)}/>
        <input type="checkbox" name="21" defaultChecked='21' checked={name === '21' ? true : false} onChange={e => setName(e.target.value)}/>
        <input type="checkbox" name="18" defaultChecked='18' checked={name === '18' ? true : false} onChange={e => setName(e.target.value)}/>

        <button onClick={formHndler}>Submit</button>
      </form>
    </div>
  )
}

export default Forms