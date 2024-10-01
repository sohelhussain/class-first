import React, { useState } from 'react'

function Practise() {
    const [name, setName] = useState('');
    const [err, setErr] = useState(true);
    const [gender, setGender] = useState('other');
    const formHandle = e => {
        e.preventDeFault();
    }
  return (
    <div>
        <form onSubmit={formHandle}>
            <input onChange={e => setName(e.target.value)} onInput={e => setErr(name.length < 5 ? true : false)} value={name} type="text" placeholder="Enter your name" />
            {err && (
            <h6>please enter your name with a length of 5 characters</h6>
            )}
        <input type="radio" name="other" defaultValue='other' checked={gender === 'other' ? true : false} onChange={e => setGender(e.target.value)}/>
        <input type="radio" name="female" defaultValue='female' checked={gender === 'female' ? true : false} onChange={e => setGender(e.target.value)}/>
        <input type="radio" name="male" defaultValue='male' checked={gender === 'male' ? true : false} onChange={e => setGender(e.target.value)}/>

        <input type="checkbox" name="not-first" onChange={e => console.log(e)}/>

            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Practise