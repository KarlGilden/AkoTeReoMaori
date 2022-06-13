import React from 'react'
import './CTAButton.css'
interface ButtonProps{
    text:string
    primary:boolean,
    func: () => void
}

const CTAButton = (props:ButtonProps) => {
  return (
    <button onClick={()=>{props.func()}} className={`CTAButton ${props.primary ? "primary" : "secondary"}`}>{props.text}</button>
  )
}

export default CTAButton