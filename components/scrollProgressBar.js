'use client'

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
    <div className="h-1 fixed w-full z-10">
      <div className="h-full bg-yoga-blue" style={{ width: `${scrollWidth}%` }}></div>
    </div>
  );
};

export default ScrollProgressBar;
