import React, { useState } from 'react'
import './Option.css'
interface IProps{
  text:string | undefined,
  setAnswer:(text:string | undefined)=>void
  answer: string | undefined
}
const Option = ({text, setAnswer, answer}:IProps) => {
  const selectOption = () => {
    setAnswer(text)
  }
  return (
    <div onClick={()=>{selectOption()}} className={`option ${answer == text ? "selected" : ""}`}>{text}</div>
  )
}

export default Option