import React from 'react'
import { IQuestion } from '../../data/data'
import CTAButton from '../Buttons/CTAButton/CTAButton'
import QuizButton from '../Buttons/QuizButton/QuizButton'
import Option from '../Option/Option'
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
            <Option text={question?.option1}/>
            <Option text={question?.option2}/>
            <Option text={question?.option3}/>
            <Option text={question?.option4}/>
            <Option text={question?.option5}/>


        </div>
        <div className="question-footer">
          <QuizButton func={()=>{nextQuestion()}} text="Submit"/>
        </div>
    </div>
  )
}

export default Question