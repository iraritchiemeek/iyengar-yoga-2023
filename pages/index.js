import Head from 'next/head'
import Image from 'next/image'
import Header from 'components/header'
import qs from 'qs';

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
  const {data} = await apiClient.get(`/page?${query}`)
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
      // Render title_list_content section
      break;

    case 'sections.title_content_content':
      console.log(content)
      break;

    case 'sections.empty_empty_content':
      // Render empty_empty_content section
      break;

    default:
      return null;
  }
}

export default function HomePage({ page }) {
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
    </main>
  );
}
