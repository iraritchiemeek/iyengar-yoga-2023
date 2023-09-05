import ReactMarkdown from 'react-markdown';

export function StickyTitle({children}) {
	return (
		<h2 className='sticky top-0'>{children}</h2>
	)
}

export function StyledMarkdown({className, content}) {
	return (
	  <ReactMarkdown
		  className={className}
	    components={{ 
	    	p: ({node, ...props}) => <p className='mb-3' {...props} />
	    }}
	    children={content}
	  />
	)
}