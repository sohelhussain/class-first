import React from 'react'
import { useForm } from 'react-hook-form'

function Reacthook() {
    const { register, handleSubmit, formState: {errors} } = useForm()

    const submitHandler = data => {
        console.log(data);
        console.log('submit');
    }
  return (
    <div>
        <form onSubmit={handleSubmit(submitHandler)}>
    <input type="text" {...register('name', {required: true, maxLength: 10})} />
    <input type="radio" {...register('gender')} />
    <input type="radio" {...register('gender')} />
    {errors.name && <p>This field is required</p>}
    <button>Submit</button>
        </form>
    </div>
  )
}

export default Reacthook