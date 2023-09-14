export const Quote = ({section}) => {
	return (
		<div className='md:col-span-4 md:col-start-2'>
		  <p className="text-4xl font-bold leading-10">“{section.Quote}”</p>
		  <p className="font-bold text-xl pt-4">- {section.Author}</p>
		</div>
	)
}