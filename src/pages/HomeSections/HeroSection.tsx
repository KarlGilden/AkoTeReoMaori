import React from 'react'
import CTAButton from '../../components/CTAButton/CTAButton'
import '../Home/Home.css'
import Wave from '../../images/wave-haikei.svg'

const HeroSection = () => {
  
  return (
    <>
    <section className='home-page'>
    <div className="home-header">
      <h1>Nau mai, haere mai</h1>
      <p>Welcome to Ako Te Reo Maori! A language learning system aiming to revolutionize the teaching of Te Reo Maori in New Zealand.</p>
      <div className="home-header-buttons">
        <CTAButton func={()=>{}} primary={true} text="Demo a lesson"/>
        <CTAButton func={()=>{}} primary={false} text="Signup Now"/>
      </div>
    </div>
  </section>
  <img className='separator' src={Wave} alt="" />
  </>

  )
}

export default HeroSection