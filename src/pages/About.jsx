import React from 'react'
import img1 from '../assets/profile-img.JPG'

const About = () => {
  return (
    <div className="about-container">
      <div className="heading-line">
        <h1>/ about me </h1>
        <div className="line"></div>

      </div>
      <div className="about-basics">
        <div className="about-description">
          <p>
            I am currently a Software Development Engineer at Amazon, working in the AWS sector under team Route 53. At the same time, I am undertaking a part-time Master's of Science in Software Engineering at University of Oxford.</p>
          <p>Here are some technologies I have been working with:</p>
          <ul className='skills-list'>
            <li>Typescript</li>
            <li> React.js</li>
            <li>Java</li>
            <li>Python</li>
            <li>C#</li>
            <li>Javascript ES6+</li>
          </ul>
          
          <p>Outside of work, I'm interested in following the developments of science. I also play a lot of video games. And make TikToks.</p>
        </div>
        <div className="image-box">
          <img src={img1} alt="" />

        </div>

      </div>


    </div>
  )
}

export default About
