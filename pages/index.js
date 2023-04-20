import { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Header from 'components/header'
import Footer from 'components/footer'
import BgGrid from 'components/bgGrid'
import DynamicContent from 'components/dynamicContent'
import qs from 'qs';
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

export default function HomePage({ page }) {

  const [headerHeight, setHeaderHeight] = useState(190);

  const banner_image = page.banner_image.data.attributes

  return (
    <>
      <BgGrid />
      <Header headerHeight={headerHeight} setHeaderHeight={setHeaderHeight} />
      <main style={{paddingTop: headerHeight}}>
        <div className="w-100">
          <Image
            src={banner_image.url}
            style={{objectFit: 'cover', height: '720px', maxWidth: '100%'}}
            width={banner_image.width}
            height={banner_image.height}
            priority
          />
        </div>
        <Container className="dynamic-content">
          {page.content.map(section => <DynamicContent section={section} />)}
        </Container>
      </main>
      <Footer />
    </>
  );
}
