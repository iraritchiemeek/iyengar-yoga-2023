import Head from 'next/head'
import Image from 'next/image'
import Header from 'components/header'
import qs from 'qs';
import ReactMarkdown from 'react-markdown';

import {Container, Row, Col} from 'react-bootstrap';
import apiClient from 'utils/apiClient';

const query = qs.stringify(
  {
    populate: '*',
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

function renderSection(section) {
  switch (section.__component) {
    case 'sections.title_list_content':
      break;

    case 'text.title-content-content':
      console.log(section)
      return (
        <>
          <Col xs={12} md={3} ><h2 className="sticky-top">{section.Title}</h2></Col>
          <Col xs={12} md={3} ><ReactMarkdown className="sticky-top">{section.center_content}</ReactMarkdown></Col>
          <Col xs={12} md={6}><ReactMarkdown>{section.main_content}</ReactMarkdown></Col>
        </>
      )
      break;

    case 'sections.empty_empty_content':
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
      <div class="w-100">
        <Image
          src={banner_image.url}
          style={{objectFit: 'cover', height: '750px', maxWidth: '100%'}}
          width={banner_image.width}
          height={banner_image.height}
          priority
        />
      </div>
      <Container>
        <Row className="pt-10">
          {page.content.map(section => renderSection(section))}
        </Row>
      </Container>
    </main>
  );
}
