'use client'

import React, { useRef } from "react";
import ReactMarkdown from 'react-markdown';
import Image from 'next/image'
import useStickyActiveHighlighter from "./useStickyActiveHighlighter";
import { StickyTitle, StyledMarkdown, StyledLink } from './text';
import { StartContentGridItem, CenterContentGridItem, EndContentGridItem } from './grid';

function StickyTopListSection({section, titleKey = "title",}) {
  const contentRef = useRef();

  const activeSection = useStickyActiveHighlighter(
    section.list.data,
    contentRef
  );

  const convertToSlug = string => string.toLowerCase().replace(/[^\w ]+/g, '') .replace(/ +/g, '-')

  const renderListNav = list => {
    return (
      <ul className="pb-4">
        {list.map(item => {
          <li key={item.id} data-id={item.id} className={item.id === activeSection ? "font-bold" : ""}>
            <StyledLink href={`#${convertToSlug(item.attributes[titleKey])}`}>{item.attributes[titleKey]}</StyledLink>
          </li>
          })
        }
      </ul>
    )
  }

  const renderListContent = list => {
    const getImage = item => item.attributes.image && item.attributes.image.data && item.attributes.image.data.attributes.formats.medium
    return (
      list.map(item => {
        return (
          <div key={item.id} data-id={item.id} id={`${convertToSlug(item.attributes[titleKey])}`} className="pb-8">
            {getImage(item) &&
              <Image
                className="mb-2"
                src={getImage(item).url}
                width={getImage(item).width}
                height={getImage(item).height}
              />
            }
            <h3 className="font-bold">{item.attributes[titleKey]}</h3>
            <StyledMarkdown content={item.attributes.description} />
          </div>
        )
      })
    )
  }

  return (
    <>
      <StartContentGridItem>
        <StickyTitle>{section.title}</StickyTitle>
      </StartContentGridItem>
      <CenterContentGridItem>
        <div className="sticky pt-2 top-0">{renderListNav(section.list.data)}</div>
      </CenterContentGridItem>
      <EndContentGridItem>
        <div ref={contentRef}>
          {renderListContent(section.list.data)}
        </div>
      </EndContentGridItem>
    </>
  );
};

export default StickyTopListSection;
