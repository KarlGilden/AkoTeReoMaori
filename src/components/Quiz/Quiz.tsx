import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { courses, ILesson, IResult, results } from '../../data/data'
import QuizButton from '../Buttons/QuizButton/QuizButton'
import Question from '../Question/Question'
import Option from '../Option/Option'
import './Quiz.css'
import '../Question/Question.css'
import ResultsModal from '../ResultsModal/ResultsModal'

const Quiz = () => {
    let {id} =  useParams<Record<string, string | undefined>>()
    const [lesson, setLesson] = useState<ILesson>()
    const [question, setQuestion] = useState(0)
    const [answer, setAnswer] = useState<any>(null)
    const [correct, setCorrect] = useState<any>(null)
    const [reviewModal, setReviewModal] = useState(false)


    useEffect(()=>{
        getData()
    })

    const getData = () => {
        setLesson(courses.find(e=> ""+e.id == id))
    }

    const nextQuestion = () => {
        setQuestion(question + 1)
        setCorrect(null)
    }

    const submitQuestion = () => {
        if(lesson){
            if(lesson?.questions[question].answer == answer){
                setCorrect(true)
                results.questions.push({correct: true, userAnswer: answer, answer: lesson?.questions[question].answer})
                console.log(results)
            }else{
                setCorrect(false)
                results.questions.push({correct: false, userAnswer: answer, answer: lesson?.questions[question].answer})
                console.log(results)

            }
        }
    }

    const review = () => {
        setReviewModal(true)
    }

  return (
    <div className='page'>
        {reviewModal && 
            <ResultsModal closeModal={()=>{setReviewModal(!reviewModal)}} results={results} container={document.getElementById("portal")as HTMLElement}/>
        }
        <div className='question-wrapper'>
            <div className="question-text-wrapper">
                <h2>{lesson?.questions[question]?.title}</h2>
            </div>
            <div className="answers">
                <Option setAnswer={setAnswer} text={lesson?.questions[question]?.option1}/>
                <Option setAnswer={setAnswer} text={lesson?.questions[question]?.option2}/>
                <Option setAnswer={setAnswer} text={lesson?.questions[question]?.option3}/>
                <Option setAnswer={setAnswer} text={lesson?.questions[question]?.option4}/>
                <Option setAnswer={setAnswer} text={lesson?.questions[question]?.option5}/>
            </div>
                <QuizButton func={submitQuestion} text={"Submit"}/>
        </div>

        <div className={`lesson-footer ${correct != null ? (correct == true ? "correct":"wrong"): ""}`}>
            {correct != null && (
                lesson && question < lesson?.questions.length -1 ? 

                <QuizButton func={nextQuestion} text={"Next"}/>
                :
                <QuizButton func={review} text={"Review"}/>
            )}
        </div>
    </div>
  )
}

export default Quiz