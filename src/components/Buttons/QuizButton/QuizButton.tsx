import React from 'react'
import './QuizButton.css'
interface IProps{
    func: () => void,
    text: string
}
const QuizButton = ({func, text}:IProps) => {
  return (
    <button onClick={()=>{func()}} className='quiz-button'>{text}</button>
  )
}

export default QuizButton