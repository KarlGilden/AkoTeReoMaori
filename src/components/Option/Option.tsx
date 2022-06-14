import React from 'react'
import './Option.css'
interface IProps{
  text:string | undefined
}
const Option = ({text}:IProps) => {
  return (
    <div className='option'>{text}</div>
  )
}

export default Option