import ReactMarkdown from 'react-markdown';
import Image from 'next/image'
import StickyTopListSection from 'components/stickyTopListSection'
import Link from 'next/link';

function DynamicContent(props) {

  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

  const convertToSlug = string => string.toLowerCase().replace(/[^\w ]+/g, '') .replace(/ +/g, '-')

  function renderImageSection(images) {
    const getImage = index => images[index].attributes.formats.medium
    switch(images.length){
      case 1:
        return (
          <div>
            <Image
              className="left"
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
            <div xs={12} md={6}>
              <Image
                className="left"
                src={getImage(0).url}
                width={getImage(0).width}
                height={getImage(0).height}
              />
            </div>
            <div></div>
            <div xs={12} md={4}>
              <Image
                src={getImage(1).url}
                width={getImage(1).width}
                height={getImage(1).height}
              />
            </div>
          </>
        )
        break;
      case 3:
        return (
          <>
            <div xs={12} md={6} className="d-flex flex-wrap">
              <div>
                <div xs={12}>
                  <Image
                    className="left"
                    src={getImage(0).url}
                    width={getImage(0).width}
                    height={getImage(0).height}
                  />
                </div>
                <div/>
                <div xs={12} md={8}>
                  <Image
                    className="left"
                    className="mt-4"
                    src={getImage(1).url}
                    width={getImage(1).width}
                    height={getImage(1).height}
                  />
                </div>
              </div>
            </div>
            <div></div>
            <div xs={12} md={4} className="d-flex align-items-center">
              <Image
                src={getImage(2).url}
                width={getImage(2).width}
                height={getImage(2).height}
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
    switch (section.__typename) {
      case 'ComponentTextTitleContentContent':
        return (
          <>
            <div className='lg:col-start-2 font-extrabold text-xl'><h2 className="sticky-md-top">{section.Title}</h2></div>
            <div className='md:col-span-2 lg:col-span-1'>
              <ReactMarkdown
                components={{p: ({node, ...props}) => <p className='mb-3' {...props} /> }}
                children={section.center_content}
              />
            </div>
            <div className='md:col-span-3 lg:col-span-2'>
              <ReactMarkdown
                components={{p: ({node, ...props}) => <p className='mb-4' {...props} /> }}
                children={section.main_content}
              />
            </div>
          </>
        )
        break;
      case 'ComponentTextQuote':
        return (
          <div>
            <p className="quote">“{section.Quote}”</p>
            <p className="quote-author">- {section.Author}</p>
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
          <div className="image-section">
            {renderImageSection(section.images.data)}
          </div>
        )
        break;
      case 'ComponentListClassLevelList':
      case 'ComponentListRetreatsList':
      case 'ComponentListTeachersList':
        return (
          <div id={convertToSlug(section.title)}>
            <div></div>
            <div xs={12} md={8}>
              <div >
                <StickyTopListSection section={section} />
              </div>
            </div>
            <div></div>
          </div>
        )
      case 'ComponentTextQuote':
      case 'ComponentTextTitleContentContent':
        return (
          <div id={section.slug} className='grid grid-cols-1 md:grid-cols-6 [&>*]:px-3 py-[2em] md:pt-[7em]'>
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
