import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { courses, ILesson } from '../../data/data'

const LessonView = () => {
    let {id} = useParams<{ id: string }>()
    const [lesson, setLesson] = useState<ILesson>();
    const [question, setQuestion] = useState(1)
    useEffect(()=>{
        getData()
    })

    const getData = () => {
        setLesson(courses.find(e=> ""+e.id == id))
    }

  return (
    <div className='page'>
        <div>
            {lesson?.questions[question].title}
        </div>
    </div>
  )
}

export default LessonView