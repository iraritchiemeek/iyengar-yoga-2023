import { StartContentGridItem, CenterContentGridItem, EndContentGridItem } from '../grid';
import ReactMarkdown from 'react-markdown';
import { StickyTitle, StyledMarkdown } from '.';

export default function TextContentSection({section}) {
  return (
    <>
      <StartContentGridItem>
        <StickyTitle>{section.Title}</StickyTitle>
      </StartContentGridItem>
      <CenterContentGridItem>
        <StyledMarkdown 
          className='sticky top-0 pt-2'
          content={section.center_content}
        />
      </CenterContentGridItem>
      <div className='md:col-span-3 lg:col-span-2'>
        <StyledMarkdown
          content={section.main_content}
        />
      </div>
    </>
  )
}