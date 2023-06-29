import React, { useEffect, useState, useRef } from "react";
import { Col } from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import Image from 'next/image'
import useStickyActiveHighlighter from "./useStickyActiveHighlighter";

const StickyTopListSection = ({section}) => {
  const contentRef = useRef();

  const activeSection = useStickyActiveHighlighter(
    section.list.data,
    contentRef
  );

  const convertToSlug = string => string.toLowerCase().replace(/[^\w ]+/g, '') .replace(/ +/g, '-')

  const renderListNav = list => {
    return (
      <ul className="pb-4">
        {list.map(item => <li key={item.id} data-id={item.id} style={{fontWeight: item.id === activeSection ? "bold" : "normal"}}><a href={`#${convertToSlug(item.attributes.title)}`}>{item.attributes.title}</a></li>)}
      </ul>
    )
  }

  const renderListContent = list => {
    const getImage = item => item.attributes.image && item.attributes.image.data && item.attributes.image.data.attributes.formats.medium
    return (
      list.map(item => {
        return (
          <div style={{paddingTop: '10px'}} key={item.id} data-id={item.id} id={`${convertToSlug(item.attributes.title)}`} className="pb-4">
            {getImage(item) &&
              <Image
                className="left mb-3"
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
      <Col xs={12} md={3} >
        <h2 className="sticky-md-top">{section.title}</h2>
      </Col>
      <Col xs={12} md={3}>
        <div className="sticky-md-top">{renderListNav(section.list.data)}</div>
      </Col>
      <Col xs={12} md={6} ref={contentRef}>
        {renderListContent(section.list.data)}
      </Col>
    </>
  );
};

export default StickyTopListSection;
