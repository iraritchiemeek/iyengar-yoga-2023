import Image from 'next/image'
import DynamicContent from 'components/dynamicContent'
import client from "../graphql/apollo-client";
import GET_PAGE_QUERY from '../graphql/queries/getPage.gql';
import qs from 'qs';

// async function getData() {
//     const res = await client.query({
//       query: GET_PAGE_QUERY,
//       variables: { id: 1 },
//     })

//     return res.data;
// }


async function getData() {
  const query = qs.stringify(
    {
      filters: {
        id: {
          $eq: 1,
        },
      },
      populate: {
        banner_image: {
          populate: '*'
        },
        content: {
          populate: '*'
        }
      }
    }, {
      encodeValuesOnly: true,
    }
  );

  const res = await fetch(`https://polar-lowlands-54507.herokuapp.com/api/pages?${query}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
    },
    next: { revalidate: 600 }
  });


  const data = await res.json();

  return data.data[0].attributes;
};


export default async function HomePage() {



  const page = await getData();

  const banner_image = page.banner_image.data.attributes

  return (
    <main>
      <Image
        alt=""
        className='h-[720px] object-cover'
        src={banner_image.url}
        width={banner_image.width}
        height={banner_image.height}
        priority
      />
      <div className="container mx-auto">
        {page.content.map(section => <DynamicContent section={section} />)}
      </div>
    </main>
  );
}
