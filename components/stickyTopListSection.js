import React, { useEffect, useState, useRef } from "react";
import { Col } from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import Image from 'next/image'

const StickyTopListSection = ({section}) => {
  console.log(section)
  const [activeSection, setActiveSection] = useState("");
  const componentRef = useRef();

  const convertToSlug = string => string.toLowerCase().replace(/[^\w ]+/g, '') .replace(/ +/g, '-')

  const handleScroll = () => {
    let currentSection = "";
    section.list.data.forEach((item) => {
      const slug = convertToSlug(item.attributes.title)
      const element = document.getElementById(slug);
      const rect = element.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        currentSection = item.id;
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

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, [section]);

  const renderListNav = list => {
    return (
      <ul className="pb-4">
        {list.map(item => <li key={item.id}  style={{fontWeight: item.id === activeSection ? "bold" : "normal"}}><a href={`#${convertToSlug(item.attributes.title)}`}>{item.attributes.title}</a></li>)}
      </ul>
    )
  }


  const renderListContent = list => {
    const getImage = item => item.attributes.image && item.attributes.image.data && item.attributes.image.data.attributes.formats.medium
    return (
      list.map(item => {
        console.log(item)
        return (
          <div style={{paddingTop: '10px'}} key={item.id} id={`${convertToSlug(item.attributes.title)}`} className="pb-4">
            {getImage(item) &&
              <Image
                className="left"
                style={{maxHeight: '300px', objectFit: 'contain', objectPosition: 'top', maxWidth: '100%'}}
                src={getImage(item).url}
                width={getImage(item).width}
                height={getImage(item).height}
              />
            }
            <h3>{item.attributes.title}</h3>
            <ReactMarkdown>{item.attributes.description}</ReactMarkdown>
          </div>
        )
      })
    )
  }

  return (
    <>
      <Col xs={12} md={3} ref={componentRef}>
        <h2 className="sticky-top">{section.title}</h2>
      </Col>
      <Col xs={12} md={3}>
        <div className="sticky-top">{renderListNav(section.list.data)}</div>
      </Col>
      <Col xs={12} md={6}>
        {renderListContent(section.list.data)}
      </Col>
    </>
  );
};

export default StickyTopListSection;
