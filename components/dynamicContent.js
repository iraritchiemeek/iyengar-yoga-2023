import {Container, Row, Col} from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image'
import Link from 'next/link';
import { Parallax } from 'react-scroll-parallax';

function DynamicContent(props) {

  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

  function renderImageSection(images) {
    const getImage = index => images[index].attributes.formats.medium
    switch(images.length){
      case 1:
        return (
          <Col>
            <Image
              style={{maxHeight: 'unset'}}
              src={images[0].attributes.url}
              width={images[0].attributes.width}
              height={images[0].attributes.height}
            />
          </Col>
        )
        break
      case 2:
        return(
          <>
            <Col xs={12} md={6}>
              <Parallax speed={getRandomNumber(-5, -10)}>
                <Image
                  src={getImage(0).url}
                  width={getImage(0).width}
                  height={getImage(0).height}
                />
              </Parallax>
            </Col>
            <Col></Col>
            <Col xs={12} md={4}>
              <Parallax speed={getRandomNumber(-5, -10)}>
                <Image
                  src={getImage(1).url}
                  width={getImage(1).width}
                  height={getImage(1).height}
                />
              </Parallax>
            </Col>
          </>
        )
        break;
      case 3:
        return (
          <>
            <Col xs={12} md={6} className="d-flex flex-wrap">
              <Row>
                <Col xs={12}>
                  <Parallax speed={getRandomNumber(-5, -10)}>
                    <Image
                      src={getImage(0).url}
                      width={getImage(0).width}
                      height={getImage(0).height}
                    />
                  </Parallax>
                </Col>
                <Col/>
                <Col xs={12} md={8}>
                  <Parallax speed={getRandomNumber(-5, -10)}>
                    <Image
                      className="mt-4"
                      src={getImage(1).url}
                      width={getImage(1).width}
                      height={getImage(1).height}
                    />
                  </Parallax>
                </Col>
              </Row>
            </Col>
            <Col></Col>
            <Col xs={12} md={4} className="d-flex align-items-center">
              <Parallax speed={getRandomNumber(-5, -10)}>
                <Image
                  src={getImage(2).url}
                  width={getImage(2).width}
                  height={getImage(2).height}
                />
              </Parallax>
            </Col>
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
            <Col xs={12} md={3} ><h2 className="sticky-top">{section.Title}</h2></Col>
            <Col xs={12} md={3} ><ReactMarkdown className="sticky-top">{section.center_content}</ReactMarkdown></Col>
            <Col xs={12} md={6}><ReactMarkdown>{section.main_content}</ReactMarkdown></Col>
          </>
        )
        break;
      case 'text.quote':
        return (
          <Col>
            <p className="quote">“{section.Quote}”</p>
            <p className="quote-author">- {section.Author}</p>
          </Col>
        )
        break;
      case 'list.class-level-list':
        return (
          <>
            <Col xs={12} md={3} ><h2 className="sticky-top">{section.title}</h2></Col>
            <Col xs={12} md={3} >
              <div className="sticky-top">
                {renderListNav(section.class_levels.data)}
              </div>
            </Col>
            <Col xs={12} md={6}>
              {renderListContent(section.class_levels.data)}
            </Col>
          </>
        )
        break;
      default:
        return null;
    }
  }

  const renderListNav = list => {
    return (
      <ul className="pb-4">
        {list.map(item => <li><a href={`#${convertToSlug(item.attributes.Title)}`}>{item.attributes.Title}</a></li>)}
      </ul>
    )
  }

  const renderListContent = list => {
    return (
      list.map(item => {
        return (
          <div id={`${convertToSlug(item.attributes.Title)}`} className="pb-4">
            <h3>{item.attributes.Title}</h3>
            <ReactMarkdown>{item.attributes.Description}</ReactMarkdown>
          </div>
        )
      })
    )
  }

  const convertToSlug = string => string.toLowerCase().replace(/[^\w ]+/g, '') .replace(/ +/g, '-')

  function renderSection(section) {
    switch (section.__component.split('.')[0]) {
      case 'images':
        return (
          <Row className="image-section">
            {renderImageSection(section.images.data)}
          </Row>
        )
        break;
      case 'list':
      case 'text':
        return (
          <Row>
            <Col></Col>
            <Col xs={12} md={8}>
              <Row >
                {renderTextSection(section)}
              </Row>
            </Col>
            <Col></Col>
          </Row>
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
