import React from 'react'
import '../Home/Home.css'
import Wave from '../../images/wave-haikei.svg'
const AboutSection = () => {
  return (
    <>
    <section className='about-section'>
        <h1>The project</h1>
        <div className="about-wrapper">

          <div className="about-container">
            <p>Learning Te Maori should be easy. 
              Unfortunately, the reality for most New Zealanders is that they are either not interested 
              or they believe that learning a second language is too difficult. 
              At Ako Te Reo Maori I plan to change that. 
              <br />
              <br />
              By utilising the power of story telling and dialogues users will be able to naturally acquire the 
              language.
            </p>
          </div>
          
        </div>
    </section>
    </>
  )
}

export default AboutSection