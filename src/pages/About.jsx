import React from 'react'
import img1 from '../assets/profile-img.jpg'

const About = () => {
  return (
    <div className="about-container" id='about'>
      <div className="heading-line">
        <h1>/ about me </h1>
        <div className="line"></div>

      </div>
      <div className="about-basics">
        <div className="about-description">
          <p>
            I am currently honing my software development skills through independent projects, creating innovative and practical applications. I am a recent graduate with a Master of Software Engineering from Australia.</p>
          <p>Here are some technologies I have been working with:</p>
          <ul className='skills-list'>
            <li>Typescript</li>
            <li> React.js</li>
            <li>Bootstrap</li>
            <li>Python</li>
            <li>Node.js</li>
            <li>Javascript ES6+</li>
          </ul>
          
          <p>Outside of work, I'm interested in following the developments of science. I also play golf sometimes.</p>
        </div>
        <div className="image-box">
          <img src={img1} alt="" />

        </div>

      </div>


    </div>
  )
}

export default About
