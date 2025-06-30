import React from 'react';
import Lottie from 'lottie-react';
import laptopAnimation from '../assets/laptopAnimation.json'; // <-- your Lottie file
import TypingHeader from '../utils/Typing Header';

const Home = () => {
  return (
    <div className="home-container">
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
        <p>I'm a software engineer from Toronto, Canada. I'm fascinated by large-scale, high-impact products and contributed to major feature launches in industry-leading services as well as apps that have 100M+ installs.</p>
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
