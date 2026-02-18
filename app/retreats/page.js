import DynamicContent from 'components/dynamicContent'
import BannerImage from '@/components/images/BannerImage';

async function getData() {
  
  const page_id = 3

  const res = await fetch(`https://polar-lowlands-54507.herokuapp.com/api/pages/${page_id}?populate[banner_image]=*&populate[content][populate][images]=*&populate[content][populate][list][populate][image]=*`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
    },
    next: { revalidate: 0 }
  });

  const data = await res.json();

  return data.data.attributes;
};

export default async function HomePage() {

  const page = await getData();
  
  const banner_image = page.banner_image.data.attributes

  return (
    <main>
      <BannerImage src={banner_image.url} />
      <div className="container mx-auto">
        {page.content.map(section => <DynamicContent section={section} />)}
      </div>
    </main>
  );
}
