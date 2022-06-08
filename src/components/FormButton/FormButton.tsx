import React, { FC } from 'react'
import './FormButton.css'

interface ButtonProps{
    text: string,
    onSubmit: () => void
}

const FormButton: FC<ButtonProps> = (props) => {
  return (
    <button onClick={props.onSubmit} className='form-button'>{props.text}</button>
  )
}

export default FormButton