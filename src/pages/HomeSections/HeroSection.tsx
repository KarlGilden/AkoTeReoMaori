import React from 'react'
import CTAButton from '../../components/Buttons/CTAButton/CTAButton'
import '../Home/Home.css'
import Wave from '../../images/wave-haikei.svg'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const navigate = useNavigate()
  return (
    <>
    <section className='home-page'>
    <div className="home-header">
      <h1>Nau mai, haere mai</h1>
      <p>Welcome to Ako Te Reo Maori! A language learning system aiming to revolutionize the teaching of Te Reo Maori in New Zealand.</p>
      <div className="home-header-buttons">
        <CTAButton func={()=>{navigate("/lesson/1")}} primary={true} text="Demo a lesson"/>
        <CTAButton func={()=>{navigate("register")}} primary={false} text="Signup Now"/>
      </div>
    </div>
    <div className="custom-shape-divider-bottom-1655379804">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
      </svg>
    </div>
  </section>
  </>

  )
}

export default HeroSection