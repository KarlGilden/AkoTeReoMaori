import React from 'react'
import './QuizButton.css'
interface IProps{
    func: () => void,
    text: string,
    disabled: boolean
}
const QuizButton = ({func, text, disabled}:IProps) => {
  return (
    <button disabled={disabled} onClick={()=>{func()}} className='quiz-button'>{text}</button>
  )
}

export default QuizButton