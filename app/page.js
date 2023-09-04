import Image from 'next/image'
import DynamicContent from 'components/dynamicContent'
import client from "../graphql/apollo-client";
import GET_PAGE_QUERY from '../graphql/queries/getPage.gql';

async function getData() {

    const res = await client.query({
      query: GET_PAGE_QUERY,
      variables: { id: 1 },
    })


    return res.data;

}
export default async function HomePage() {

  const data = await getData();
  const page = data.page.data.attributes
  
  const banner_image = page.banner_image.data.attributes

  return (
    <main>
      <div className="w-full">
        <Image
          className="banner-image"
          alt=""
          src={banner_image.url}
          width={banner_image.width}
          height={banner_image.height}
          priority
        />
      </div>
      <div className="container mx-auto">
        {page.content.map(section => <DynamicContent section={section} />)}
      </div>
    </main>
  );
}
