import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CTAButton from '../../components/Buttons/CTAButton/CTAButton'
import LessonDescription from '../../components/LessonDescription/LessonDescription'
import Question from '../../components/Question/Question'
import { courses, ILesson } from '../../data/data'
import './LessonView.css'
const LessonView = () => {
    let {id} =  useParams<Record<string, string | undefined>>()
    const [lesson, setLesson] = useState<ILesson>();
    const [preLesson, setPreLesson] = useState(true)
    const [question, setQuestion] = useState(0)
    useEffect(()=>{
        getData()
    })

    const getData = () => {
        setLesson(courses.find(e=> ""+e.id == id))
    }

    const startQuiz = () => {
        setPreLesson(false)
    }

    const nextQuestion = () => {
        if(lesson){
            if(question < lesson.questions.length -1){
                setQuestion(question + 1)
            }
        }

    }

  return (
    <div className='page lesson-view'>
        <div className="lesson-wrapper">
            {preLesson ? 
                <div className="lesson-description">
                    <h1>{lesson?.title}</h1>
                    <p>In this module you will be learning the following story:</p>
                    <p className='lesson-text'><i>{lesson?.text}</i></p>
                    <p>Don't worry if you can't understand everything at first. By the end of this lesson you will understand it much better!</p>
                    <CTAButton func={startQuiz} primary={true} text="Start Lesson"></CTAButton>
                </div>
                :
                <Question nextQuestion={()=>{nextQuestion()}} question={lesson?.questions[question]}/>
            }
        </div>
    </div>
  )
}

export default LessonView