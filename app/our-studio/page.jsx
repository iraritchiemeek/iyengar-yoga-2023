import Image from 'next/image'
import DynamicContent from 'components/dynamicContent'

async function getData() {
  
  const page_id = 2

  const res = await fetch(`https://polar-lowlands-54507.herokuapp.com/api/pages/${page_id}?populate=deep`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
    },
    next: { revalidate: 0 }
  });

  const data = await res.json();

  return data.data.attributes;
};

export default async function OurStudioPage() {

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
