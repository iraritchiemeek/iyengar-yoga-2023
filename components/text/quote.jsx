export const Quote = ({section}) => {
	return (
		<div className='md:col-span-4 md:col-start-2 md:py-40'>
		  <p className="text-xl md:text-4xl font-bold md:leading-10">“{section.Quote}”</p>
		  <p className="font-bold text-xl pt-4">- {section.Author}</p>
		</div>
	)
}