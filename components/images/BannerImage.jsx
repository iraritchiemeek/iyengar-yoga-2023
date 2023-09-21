import Image from 'next/image'

export default function BannerImage({src}) {
	return (
		<div className='w-full relative h-[240px] md:h-[720px] '>
			<Image
			  alt=""
			  className='object-cover'
			  src={src}
			  fill={true}
			  priority
			/>
		</div>
	)
}