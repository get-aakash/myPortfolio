import React, { useState, useEffect } from 'react';



function TypingHeader() {
  const fullText = 'hi, Aakash here.';
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 100; // ms per character

    function type() {
      setDisplayedText(fullText.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex < fullText.length) {
        setTimeout(type, typingSpeed);
      } else {
        // Start blinking cursor after typing completes
        blinkCursor();
      }
    }

    function blinkCursor() {
      setShowCursor((prev) => !prev);
      setTimeout(blinkCursor, 500);
    }

    type();
  }, []);

  return (
  <h1>
    {displayedText.split("Aakash").map((part, i, arr) =>
      i < arr.length - 1 ? (
        <React.Fragment key={i}>
          {part}
          <span className="name">Aakash</span>
        </React.Fragment>
      ) : (
        <React.Fragment key={i}>{part}</React.Fragment>
      )
    )}
    <span className="cursor" style={{ opacity: showCursor ? 1 : 0 }}></span>
  </h1>
);

}

export default TypingHeader;



export function LaptopAnimation() {
  return <Lottie animationData={laptopAnimation} loop={true} />;
}
