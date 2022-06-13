import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import CourseCard from '../../components/CourseCard/CourseCard'
import './Courses.css'
import { courses } from '../../data/data'
import { useAuth } from '../../contexts/AuthContext'

const Courses = () => {
  const { user, authLoading } = useAuth()

  return (
  <div className='page'>
  <div className="courses-container">
    <div className="course-header">
      <h2>Stories</h2>
    </div>
      {courses.filter(e => e.type == 0).map((value)=>{
        return(
          <Link to={`/lesson/${value.id}`}><CourseCard title={value.title} numQuestions={value.questions.length}/></Link>
        )
      })}
  </div>
  <div className="courses-container">
    <div className="course-header">
      <h2>Dialogues</h2>
    </div>          
      {courses.filter(e => e.type == 1).map((value)=>{
        return(
          <Link to={`/lesson/${value.id}`}><CourseCard title={value.title} numQuestions={value.questions.length}/></Link>
        )
      })}
  </div>
</div>

  )
}

export default Courses