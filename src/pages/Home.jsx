import React from 'react';
import Lottie from 'lottie-react';
import laptopAnimation from '../assets/laptopAnimation.json'; // <-- your Lottie file
import TypingHeader from '../utils/Typing Header';

const Home = () => {
  return (
    <div className="home-container" id='home'>
      <div className="image-container">
        <Lottie
          animationData={laptopAnimation}
          loop={true}
          style={{ width: 300, height: 300 }}
        />
      </div>

      <div className="description-container">
        <TypingHeader />
        <h3>I create stuff sometimes.</h3>
        <p>I’m a software engineer from Canberra, Australia, driven by a passion for creating large-scale, impactful products. Lately, I’ve been sharpening my skills by crafting elegant and responsive web applications using React Bootstrap, blending functionality with great user experiences.</p>
      </div>
      <a href="mailto:mail.aakash108@example.com" className="no-style-link">
        <div className="message-button">
          <i className="fa-solid fa-envelope"></i>
          <span>say hi!</span>
        </div>

      </a>

    </div>
  );
};

export default Home;
