import React from 'react'
import { IQuestion } from '../../data/data'
import CTAButton from '../Buttons/CTAButton/CTAButton'
import QuizButton from '../Buttons/QuizButton/QuizButton'
import Option from '../Option/Option'
import './Question.css'
interface IProps{
    question: IQuestion | undefined,
    setAnswer: (text:string |undefined)=>void
}
const Question = ({question, setAnswer}:IProps) => {
  return (
    <div className='question-wrapper'>
        <div className="question-text-wrapper">
            <h2>{question?.title}</h2>
        </div>
        <div className="answers">
            <Option setAnswer={setAnswer} text={question?.option1}/>
            <Option setAnswer={setAnswer} text={question?.option2}/>
            <Option setAnswer={setAnswer} text={question?.option3}/>
            <Option setAnswer={setAnswer} text={question?.option4}/>
            <Option setAnswer={setAnswer} text={question?.option5}/>
        </div>
    </div>
  )
}

export default Question