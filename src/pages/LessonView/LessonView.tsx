import React, { FC, FunctionComponent, ReactNode, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CTAButton from '../../components/Buttons/CTAButton/CTAButton'
import { courses, ILesson } from '../../data/data'
import './LessonView.css'
const LessonView = () => {
    let {id} =  useParams<Record<string, string | undefined>>()
    const [lesson, setLesson] = useState<ILesson>();
    const navigate = useNavigate()
    useEffect(()=>{
        getData()
    })

    const getData = () => {
        setLesson(courses.find(e=> ""+e.id == id))
    }

    const startQuiz = () => {
        navigate('/lesson/quiz/'+ id)
    }

  return (
    <div className='page lesson-view'>
        <div className="lesson-description">
            <h1>{lesson?.title}</h1>
            <p>In this module you will be learning the following story:</p>
            <p className='lesson-text'><i>{lesson?.text}</i></p>
            <p>Don't worry if you can't understand everything at first. By the end of this lesson you will understand it much better!</p>
            <CTAButton func={startQuiz} primary={true} text="Start Lesson"/>
        </div>            
    </div>
  )
}

export default LessonView