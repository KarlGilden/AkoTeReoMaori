import React, { useState } from 'react'
import './Option.css'
interface IProps{
  text:string | undefined,
  setAnswer:(text:string | undefined)=>void
}
const Option = ({text, setAnswer}:IProps) => {
  const selectOption = () => {
    setAnswer(text)
  }
  return (
    <div onClick={()=>{selectOption()}} className={`option`}>{text}</div>
  )
}

export default Option