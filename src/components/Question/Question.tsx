import React from 'react'
import { IQuestion } from '../../data/data'
import CTAButton from '../CTAButton/CTAButton'
import './Question.css'
interface IProps{
    question: IQuestion | undefined,
    nextQuestion: ()=>void
}
const Question = ({question, nextQuestion}:IProps) => {
  return (
    <div className='question-wrapper'>
        <div className="question-text-wrapper">
            
            <h2>{question?.title}</h2>
        </div>
        <div className="answers">
            <p>{question?.option1}</p>
            <p>{question?.option2}</p>
            <p>{question?.option3}</p>
            <p>{question?.option4}</p>
            <p>{question?.option5}</p>
        </div>
        <div className="question-footer">
          <CTAButton primary={true} func={()=>{nextQuestion()}} text="Submit"/>
        </div>
    </div>
  )
}

export default Question