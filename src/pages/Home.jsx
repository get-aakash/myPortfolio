import React from 'react'
import flower from '../assets/flower_image.png'

const Home = () => {
  return (
    <div className="home-container">
      <div className="image-container">
        <img src={flower} alt="" />

      </div>
      <div className="description-container">
        <h1>hi, <span class="name">Aakash</span> here.</h1>
        <h3>I create stuff sometimes.</h3>
        <p>I'm a software engineer from Toronto, Canada. I'm fascinated by large-scale, high-impact products and contributed to major feature launches in industry-leading services as well as apps that have 100M+ installs.</p>
      </div>

      <div className="message-button">
        <i class="fa-solid fa-envelope"></i>
        <p>say hi!</p>
      </div>
    </div>
  )
}

export default Home
