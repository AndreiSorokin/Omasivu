import React from 'react'
import "../styles/about.css"
import Me from "../img/Me.png"
import git from "../img/git.png"
import li from "../img/li.png"

const About = () => {
  return (
    <div className='about'>
      <div className="links">
          <a className='link' href="https://github.com/AndreiSorokin" target="_blank"><img className='git' src={git} alt="GitHub" /></a>
          <a className='link' href="https://www.linkedin.com/in/andrei-sorokin-727546235/" target='_blank'><img className='li' src={li} alt="in"/></a>
        </div>  
      <div className="intro">
        <div className="image-container">
          <img className='me' src={Me} alt="" />
        </div>
        <p>Hello, I am a junior full-stack developer based in Helsinki, originally from Russia, who transitioned from civil aviation to this field.</p>
      </div>      
        <div className="wrapper">
        <p>
          {/* Hello, I am a junior full-stack developer based in Helsinki, originally from Russia, who transitioned from civil aviation to this field.
          <br/>
          <br/> */}
          My journey began when I realized my passion for programming while studying at a Civil Aviation University. Feeling the need for more freedom and opportunities, I decided to pursue programming further. Recognizing the global demand for IT specialists, I enrolled at Bauman Moscow State University to delve into programming.
          <br/>
          <br/>
          During my studies, I explored various countries to relocate to and ultimately chose Finland. Initially lacking the funds to move directly, I applied to a university in Estonia as a stepping stone. This required me to pass the IELTS exam, despite having no prior knowledge of English. Determined, I dedicated several months to learning the language and achieved a B2 level in a remarkably short time.
          <br/>
          <br/>
          Having successfully completed the IELTS exam, I pursued a degree in software engineering and entrepreneurship at the university in Estonia. After this long journey, I find myself here in Helsinki, ready to embark on the next chapter of my career as a developer.</p>
      </div>
    </div>
  )
}

export default About
