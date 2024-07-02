import React from 'react'
import "../styles/skills.css"

const Skills = () => {
  return (
    <div className="skills">

      <h3 className='skills__header'>Front end</h3>

      <div className="skills-section">
      <div className="skill">
        <div className="skill-name">HTML</div>
        <div className="progress">
          <div className="progress-bar" style={{width: "100%"}}></div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name">CSS</div>
        <div className="progress">
          <div className="progress-bar" style={{width: "100%"}}></div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name">SCSS/SASS</div>
        <div className="progress">
          <div className="progress-bar" style={{width: "80%"}}></div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name">JavaScript</div>
        <div className="progress">
          <div className="progress-bar" style={{width: "100%"}}></div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name">TypeScript</div>
        <div className="progress">
          <div className="progress-bar" style={{width: "100%"}}></div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name">React</div>
        <div className="progress">
          <div className="progress-bar" style={{width: "100%"}}></div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name">Redux</div>
        <div className="progress">
          <div className="progress-bar" style={{width: "90%"}}></div>
        </div>
      </div>
      </div>

      <h3 className='skills__header'>Back end</h3>

      <div className="skills-section">
        <div className="skill">
        <div className="skill-name">Node.js</div>
        <div className="progress">
          <div className="progress-bar" style={{width: "100%"}}></div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name">Java</div>
        <div className="progress">
          <div className="progress-bar" style={{width: "60%"}}></div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name">SpringBoot</div>
        <div className="progress">
          <div className="progress-bar" style={{width: "60%"}}></div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name">PHP</div>
        <div className="progress">
          <div className="progress-bar" style={{width: "25%"}}></div>
        </div>
      </div>
      </div>

      <h3 className='skills__header'>Databases</h3>

      <div className="skills-section">
      <div className="skill">
        <div className="skill-name">Mongo DB</div>
        <div className="progress">
          <div className="progress-bar" style={{width: "100%"}}></div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name">PostgreSQL</div>
        <div className="progress">
          <div className="progress-bar" style={{width: "100%"}}></div>
        </div>
      </div>
      </div>

      <h3 className='skills__header'>Tests</h3>
      
      <div className="skills-section">
      <div className="skill">
        <div className="skill-name">Jest</div>
        <div className="progress">
          <div className="progress-bar" style={{width: "80%"}}></div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name">Cypres</div>
        <div className="progress">
          <div className="progress-bar" style={{width: "100%"}}></div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name">Postman</div>
        <div className="progress">
          <div className="progress-bar" style={{width: "100%"}}></div>
        </div>
      </div>
      </div>
      
      <h3 className='skills__header'>Other</h3>
      <div className="skills-section">
      <div className="skill">
        <div className="skill-name">hibernate</div>
        <div className="progress">
          <div className="progress-bar" style={{width: "70%"}}></div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name">GraphQL</div>
        <div className="progress">
          <div className="progress-bar" style={{width: "70%"}}></div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name">Docker</div>
        <div className="progress">
          <div className="progress-bar" style={{width: "70%"}}></div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name">Git</div>
        <div className="progress">
          <div className="progress-bar" style={{width: "100%"}}></div>
        </div>
      </div>
      </div>

      <h3 className='skills__header'>Design tools</h3>
      
      <div className="skills-section">
      <div className="skill">
        <div className="skill-name">Figma</div>
        <div className="progress">
          <div className="progress-bar" style={{width: "80%"}}></div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Skills
