import React, { useContext, useEffect, useState } from 'react'
import CTAButton from '../../components/Buttons/CTAButton/CTAButton';
import Login from '../../components/Login/Login';
import  { useAuth } from '../../contexts/AuthContext';
import './Home.css'
import HeroSection from '../HomeSections/HeroSection';
import AboutSection from '../HomeSections/AboutSection';
import Wave from '../../images/wave-haikei.svg'
import './Home.css'
const Home = () => {
    const {user} = useAuth();

  return (
    <>
    <HeroSection/>

    <AboutSection/>
    </>
  )
}

export default Home