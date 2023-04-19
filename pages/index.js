import Head from 'next/head'
import Image from 'next/image'
import Header from 'components/header'
import qs from 'qs';
import ReactMarkdown from 'react-markdown';

import {Container, Row, Col} from 'react-bootstrap';
import apiClient from 'utils/apiClient';

const query = qs.stringify(
  {
    populate: {
      banner_image: {
        populate: '*'
      },
      content: {
        populate: '*'
      }
    }
  },
  {
    encodeValuesOnly: true,
  }
);

export const getStaticProps = async () => {
  const {data} = await apiClient.get(`/pages/1?${query}`)
  const page = data.data.attributes
  return {
    props: {
      page: page
    },
  };
};

function renderImageSection(images) {
  console.log(images)
  switch(images.length){
    case 1:
      break
    case 2:
      return(
        <Row className="pt-10">
          <Col xs={12} md={6}>
            <Image
              src={images[0].attributes.url}
              style={{objectFit: 'contain', maxWidth: '100%', maxHeight: '420px'}}
              width={images[0].attributes.width}
              height={images[0].attributes.height}
            />
          </Col>
          <Col></Col>
          <Col xs={12} md={4}>
            <Image
              src={images[1].attributes.url}
              style={{objectFit: 'contain', maxWidth: '100%',  maxHeight: '420px'}}
              width={images[1].attributes.width}
              height={images[1].attributes.height}
            />
          </Col>
        </Row>
      )

    default:
      return null
    }
}

function renderSection(section) {
  console.log(section)
  switch (section.__component) {
    case 'images.images':
      return renderImageSection(section.images.data)
      break;

    case 'text.title-content-content':
      console.log(section)
      return (
        <Row className="pt-10">
          <Col xs={12} md={3} ><h2 className="sticky-top">{section.Title}</h2></Col>
          <Col xs={12} md={3} ><ReactMarkdown className="sticky-top">{section.center_content}</ReactMarkdown></Col>
          <Col xs={12} md={6}><ReactMarkdown>{section.main_content}</ReactMarkdown></Col>
        </Row>
      )
      break;

    default:
      return null;
  }
}

export default function HomePage({ page }) {
  console.log(page)
  const banner_image = page.banner_image.data.attributes
  return (
    <main>
      <Container>
        <Header />
      </Container>
      <div className="w-100">
        <Image
          src={banner_image.url}
          style={{objectFit: 'cover', height: '750px', maxWidth: '100%'}}
          width={banner_image.width}
          height={banner_image.height}
          priority
        />
      </div>
      <Container>
        {page.content.map(section => renderSection(section))}
      </Container>
    </main>
  );
}
