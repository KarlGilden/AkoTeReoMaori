import React from 'react'
import './CTAButton.css'
interface ButtonProps{
    text:string
    primary:boolean
}

const CTAButton = (props:ButtonProps) => {
  return (
    <button className={`CTAButton ${props.primary ? "primary" : "secondary"}`}>{props.text}</button>
  )
}

export default CTAButton