import React from 'react'
import './CourseCard.css'

interface ICourseCard{
    title:string,
    numQuestions: number

}

const CourseCard = (props:ICourseCard) => {
  return (
    <div className='course-card'>
        <h3>{props.title}</h3>
        <p>No. Questions: {props.numQuestions}</p>
    </div>
  )
}

export default CourseCard