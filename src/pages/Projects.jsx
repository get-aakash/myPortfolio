import React from 'react'
import { Button, Card, Carousel } from 'react-bootstrap'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'

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
            <div className="left-header"><i class="fa-brands fa-github"></i> <i class="fa-solid fa-arrow-up-from-bracket"></i></div>
          </div>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card className='card-tag' >
          <div className="card-header">
            <div className="img"><i class="fa-solid fa-folder"></i></div>
            <div className="left-header"><i class="fa-brands fa-github"></i> <i class="fa-solid fa-arrow-up-from-bracket"></i></div>
          </div>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card className='card-tag' >
          <div className="card-header">
            <div className="img"><i class="fa-solid fa-folder"></i></div>
            <div className="left-header"><i class="fa-brands fa-github"></i> <i class="fa-solid fa-arrow-up-from-bracket"></i></div>
          </div>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card className='card-tag' >
          <div className="card-header">
            <div className="img"><i class="fa-solid fa-folder"></i></div>
            <div className="left-header"><i class="fa-brands fa-github"></i> <i class="fa-solid fa-arrow-up-from-bracket"></i></div>
          </div>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card className='card-tag' >
          <div className="card-header">
            <div className="img"><i class="fa-solid fa-folder"></i></div>
            <div className="left-header"><i class="fa-brands fa-github"></i> <i class="fa-solid fa-arrow-up-from-bracket"></i></div>
          </div>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card className='card-tag' >
          <div className="card-header">
            <div className="img"><i class="fa-solid fa-folder"></i></div>
            <div className="left-header"><i class="fa-brands fa-github"></i> <i class="fa-solid fa-arrow-up-from-bracket"></i></div>
          </div>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>


      </div>
    </>
  )
}

export default Projects
