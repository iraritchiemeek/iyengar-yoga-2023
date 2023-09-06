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
            <Image
              className="md:col-span-3 md:row-span-3 md:row-end-3"
              alt=""
              src={getImage(0).url}
              width={getImage(0).width}
              height={getImage(0).height}
            />
            <Image
              alt=""
              className="md:col-span-2 md:col-start-5 md:row-span-2 md:row-start-2"
              src={getImage(1).url}
              width={getImage(1).width}
              height={getImage(1).height}
            />
            <Image
              className="md:col-span-2 md:col-start-2 md:row-start-5"
              alt=""
              src={getImage(2).url}
              width={getImage(2).width}
              height={getImage(2).height}
            />
          </>
        )
        break;

      default:
        return null
    }
  }

  function renderTextSection(section) {
    switch (section.__typename) {
      case 'ComponentTextTitleContentContent':
        return (
          <>
            <StartContentGridItem>
              <StickyTitle>{section.Title}</StickyTitle>
            </StartContentGridItem>
            <CenterContentGridItem>
              <StyledMarkdown 
                className='sticky top-0'
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
      case 'ComponentTextQuote':
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
    switch (section.__typename) {
      case 'ComponentImagesImages':
        return (
          <div className="grid grid-cols-1 md:grid-rows6 md:grid-cols-6 [&>*]:px-3 [&>*]:py-3 [&>*]:md:p-0 py-[2em] md:pt-[12em]">
            {renderImageSection(section.images.data)}
          </div>
        )
        break;
      case 'ComponentListClassLevelList':
      case 'ComponentListRetreatsList':
      case 'ComponentListTeachersList':
        return (
          <div id={convertToSlug(section.title)} className='grid grid-cols-1 md:grid-cols-6 [&>*]:px-3 pt-[7em]'>
            <StickyTopListSection section={section} />
          </div>
        )
      case 'ComponentTextQuote':
      case 'ComponentTextTitleContentContent':
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
