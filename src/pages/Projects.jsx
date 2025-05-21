import React from 'react'
import { Carousel } from 'react-bootstrap'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'

const Projects = () => {
  return (
    <div className="project-container">
      <div className="heading-line">
        <h1>/ pet projects</h1>
        <div className="line"></div>
        </div>
        <div className="project-slide">
          <div className="my-carousel">
          <Carousel>
            <Carousel.Item>
              <img className=" project d-block w-100 h-100" src={project1} alt="First slide" />
              <Carousel.Caption>
                <h3>First Slide</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className=" project d-block w-100 h-100" src={project2} alt="Second slide" />
              <Carousel.Caption>
                <h3>Second Slide</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="project-detail">

        </div>

        </div>

        
      
    </div>
  )
}

export default Projects
