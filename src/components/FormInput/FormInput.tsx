import React, { FC } from 'react'
import './FormInput.css'
interface InputProps{
  state: (s:string) => void,
  invalid: boolean
}
const FormInput: FC<InputProps> = (props) => {
  return (
    <input
    className={`form-input ${props.invalid ? "error" : ""}`}
    onChange={(e)=>{
      props.state(e.target.value)
    }}
    />
  )
}

export default FormInput