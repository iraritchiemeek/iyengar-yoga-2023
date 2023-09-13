import ReactMarkdown from 'react-markdown';
import Image from 'next/image'
import StickyTopListSection from 'components/stickyTopListSection'
import { StickyTitle, StyledMarkdown } from './text';
import { StartContentGridItem, CenterContentGridItem, EndContentGridItem } from './grid';

function DynamicContent(props) {

  const convertToSlug = string => string.toLowerCase().replace(/[^\w ]+/g, '') .replace(/ +/g, '-')

  function renderImageSection(images) {
    const getImage = index => images[index].attributes.formats.large
    switch(images.length){
      case 1:
        return (
          <div>
            <Image
              className="left"
              alt=""
              style={{maxHeight: 'unset', objectFit: 'cover', objectPosition: 'center'}}
              src={images[0].attributes.url}
              width={images[0].attributes.width}
              height={images[0].attributes.height}
            />
          </div>
        )
        break
      case 2:
        return(
          <>
            <Image
              className='md:col-span-3 md:row-span-6'
              alt=""
              src={getImage(0).url}
              width={getImage(0).width}
              height={getImage(0).height}
            />
            <Image
              className='md:col-span-2 md:col-start-5 md:row-start-3 md:row-span-3'
              src={getImage(1).url}
              alt=""
              width={getImage(1).width}
              height={getImage(1).height}
            />
          </>
        )
        break;
      case 3:
        return (
          <>
            <div className="grid grid-cols-1 md:grid-rows-6 md:grid-cols-3 md:col-span-3">
              <Image
                className="md:row-span-4 md:col-span-3 md:row-span-3 p-3 md:p-0"
                alt=""
                src={getImage(0).url}
                width={getImage(0).width}
                height={getImage(0).height}
              />
              <Image
                className="md:col-span-2 md:col-start-2 md:row-start-5 md:row-span-2 p-3 md:p-0" 
                alt=""
                src={getImage(2).url}
                width={getImage(2).width}
                height={getImage(2).height}
              />
            </div>
            <div className="grid md:grid-rows-6 grid-cols-1 md:grid-cols-3 md:col-span-3 p-3 md:p-0">
              <Image
                alt=""
                className="md:col-span-2 md:col-start-2 md:row-start-3 md:row-span-6"
                src={getImage(1).url}
                width={getImage(1).width}
                height={getImage(1).height}
              />
            </div>
          </>
        )
        break;

      default:
        return null
    }
  }

  function renderTextSection(section) {
    switch (section.__component) {
      case 'text.title-content-content':
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
        break;
      case 'text.quote':
        return (
          <div className='md:col-span-4 md:col-start-2'>
            <p className="text-4xl font-bold leading-10">“{section.Quote}”</p>
            <p className="font-bold text-xl pt-4">- {section.Author}</p>
          </div>
        )
        break;
      default:
        return null;
    }
  }

  function renderSection(section) {
    switch (section.__component) {
      case 'images.images':
        return (
          <div className="grid grid-cols-1 md:grid-cols-6 [&>*]:md:p-0 py-[2em] md:pt-[12em]">
            {renderImageSection(section.images.data)}
          </div>
        )
        break;
      case 'list.class-level-list':
      case 'list.retreats-list':
      case 'list.teachers-list':
        return (
          <div id={convertToSlug(section.title)} className='grid grid-cols-1 md:grid-cols-6 [&>*]:px-3 pt-[7em]'>
            <StickyTopListSection section={section} />
          </div>
        )
      case 'text.quote':
      case 'text.title-content-content':
        return (
          <div id={section.slug} className='grid grid-cols-1 md:grid-cols-6 [&>*]:px-3 pt-[7em]'>
            {renderTextSection(section)}
          </div>
        )
        break;
      default:
        return null;
    }
  }

  return (
  	renderSection(props.section)
  );
}

export default DynamicContent;
