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
  </section>
  <img className='separator' src={Wave} alt="" />
  </>

  )
}

export default HeroSection