'use client'

import { useState, useEffect } from "react";

const useStickyActiveHighlighter = (sections, contentRef) => {
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    let currentSection = "";
    sections.forEach((section, index) => {
      const element = contentRef.current.querySelector(
        `[data-id="${section.id}"]`
      );
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.id;
        }
      }
    });
    setActiveSection(currentSection);
  };

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.addEventListener("scroll", handleScroll);
        } else {
          window.removeEventListener("scroll", handleScroll);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    });

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, [sections, contentRef]);

  return activeSection;
};

export default useStickyActiveHighlighter;
