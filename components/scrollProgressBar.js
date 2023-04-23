import React, { useState, useEffect } from 'react';

const ScrollProgressBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const updateProgressBar = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const totalScroll = docHeight - windowHeight;
    const scrollPercentage = (scrollTop / totalScroll) * 100;

    setScrollWidth(scrollPercentage);
  };

  useEffect(() => {
    updateProgressBar()
    window.addEventListener('scroll', updateProgressBar);
    return () => {
      window.removeEventListener('scroll', updateProgressBar);
    };
  }, []);

  return (
    <div className="scroll-progress-container">
      <div className="scroll-progress-bar" style={{ width: `${scrollWidth}%` }}></div>
    </div>
  );
};

export default ScrollProgressBar;
