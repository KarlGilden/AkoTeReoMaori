import React, { FC } from 'react'
import './FormInput.css'
interface InputProps{
  state: (s:string) => void
}
const FormInput: FC<InputProps> = (props) => {
  return (
    <input
    className='form-input' 
    onChange={(e)=>{
      props.state(e.target.value)
    }}
    />
  )
}

export default FormInput