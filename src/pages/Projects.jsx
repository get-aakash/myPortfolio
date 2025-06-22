import React from 'react'
import { Button, Card, Carousel } from 'react-bootstrap'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <>
      <div className="project-container">
        <div className="heading-line">
          <h1>/ pet projects</h1>
          <div className="line"></div>
        </div>
        <div className="project-slide" >
          <div className="my-carousel">
            <Carousel>
              <Carousel.Item>
                <img className=" project  " src={project1} alt="First slide" />
                <Carousel.Caption>
                  <h3>Weather App</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className=" project  " src={project2} alt="Second slide" />
                <Carousel.Caption>
                  <h3>Notes App</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="project-detail">

          </div>

        </div>



      </div>

      <div className="project-card">
        <Card className='card-tag' >
          <div className="card-header">
            <div className="img"><i class="fa-solid fa-folder"></i></div>
            <div className="left-header"><Link to="https://github.com/get-aakash/weatherApp.git" target='_blank'><i className="fa-brands fa-github"></i></Link> <Link to="https://weather-app-sand-beta-40.vercel.app/" target="_blank"><i className="fa-solid fa-arrow-up-from-bracket"></i></Link></div>
          </div>
          <Card.Body>
            <Card.Title>Weather App</Card.Title>
            <Card.Text>
              An Application to find out the weather created using React.
            </Card.Text>
            
          </Card.Body>
        </Card>
        <Card className='card-tag' >
          <div className="card-header">
            <div className="img"><i class="fa-solid fa-folder"></i></div>
            <div className="left-header"><Link to="https://github.com/get-aakash/Javascript_todo.git" target='_blank'><i class="fa-brands fa-github"></i></Link> <Link to="https://javascript-todo-seven.vercel.app/" target='_blank'><i class="fa-solid fa-arrow-up-from-bracket"></i></Link> </div>
          </div>
          <Card.Body>
            <Card.Title>To Do App</Card.Title>
            <Card.Text>
              A To Do app created using JavaScript.
            </Card.Text>
            
          </Card.Body>
        </Card>
        <Card className='card-tag' >
          <div className="card-header">
            <div className="img"><i class="fa-solid fa-folder"></i></div>
            <div className="left-header"><Link to="https://github.com/get-aakash/notesApp.git" target='_blank'><i class="fa-brands fa-github"></i></Link> <Link to="https://notes-app-puce-tau.vercel.app/" target='_blank'><i class="fa-solid fa-arrow-up-from-bracket"></i></Link> </div>
          </div>
          <Card.Body>
            <Card.Title>Notes App</Card.Title>
            <Card.Text>
              A simple Notes app to create and save notes created using JavaScript.
            </Card.Text>
            
          </Card.Body>
        </Card>
        <Card className='card-tag' >
          <div className="card-header">
            <div className="img"><i class="fa-solid fa-folder"></i></div>
            <div className="left-header"><Link to="https://github.com/get-aakash/myPortfolio.git" target='_blank'><i class="fa-brands fa-github"></i></Link> <Link to="https://my-portfolio-opal-chi-35.vercel.app/"><i class="fa-solid fa-arrow-up-from-bracket"></i></Link> </div>
          </div>
          <Card.Body>
            <Card.Title>Portfolio Website</Card.Title>
            <Card.Text>
              A portfolio website created using React.
            </Card.Text>
            
          </Card.Body>
        </Card>
        


      </div>
    </>
  )
}

export default Projects
