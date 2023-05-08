import Image from 'next/image'
import DynamicContent from 'components/dynamicContent'
import {Container, Row, Col} from 'react-bootstrap';
import client from "../graphql/apollo-client";
import GET_PAGE_QUERY from '../graphql/queries/getPage.gql';

export const getStaticProps = async () => {
    const { data } = await client.query({
      query: GET_PAGE_QUERY,
      variables: { id: 2 },
    })
    return {
      props: {
        page: data.page.data.attributes
      },
   };
}

export default function HomePage({ page }) {

  const banner_image = page.banner_image.data.attributes

  return (
    <main>
      <div className="w-100">
        <Image
          className="banner-image"
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
  );
}
