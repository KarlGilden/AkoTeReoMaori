import React from 'react'
import CTAButton from '../../components/CTAButton/CTAButton'
import '../Home/Home.css'
const HeroSection = () => {
  return (
    <section className='home-page'>
    <div className="home-header">
      <h1>Kia Ora,</h1>
      <p>Welcome to Ako Te Reo Maori! A language learning system aiming to revolutionize the teaching of Te Reo Maori in New Zealand.</p>
      <div className="home-header-buttons">
        <CTAButton primary={true} text="Demo a lesson"/>
        <CTAButton primary={false} text="Signup Now"/>
      </div>
    </div>
  </section>
  )
}

export default HeroSection