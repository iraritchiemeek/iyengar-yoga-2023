import DynamicContent from 'components/dynamicContent'
import BannerImage from '@/components/images/BannerImage';

async function getData(id) {
  
  const res = await fetch(`https://polar-lowlands-54507.herokuapp.com/api/retreats/${id}?populate=deep`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
    },
    next: { revalidate: 0 }
  });

  const data = await res.json();

  return data.data.attributes;
};

export default async function HomePage({params}) {

  const page = await getData(params.id);

  const banner_image = page.image.data.attributes

  return (
    <main>
      <BannerImage src={banner_image.url} />
      <div className="container mx-auto">
        {page.content.map(section => <DynamicContent section={section} />)}
      </div>
    </main>
  );
}
