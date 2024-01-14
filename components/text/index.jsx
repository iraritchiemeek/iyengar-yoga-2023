import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

export function StickyTitle({children}) {
	return (
		<h2 className='sticky top-0 pt-2'>{children}</h2>
	)
}

export function StyledMarkdown({className, content}) {
	return (
	  <ReactMarkdown
		  className={className}
	    components={{ 
	    	p: ({node, ...props}) => <p className='mb-3' {...props} />,
	    	a: ({node, ...props}) => <StyledLink {...props} />
	    }}
	    children={content}
	  />
	)
}

export function StyledLink({ children, href, className='', ...props }) {
  const isExternal = href.startsWith('http://') || href.startsWith('https://');
  const defaultClasses = "underline underline-offset-2 hover:text-yoga-blue transition-colors ease-out duration-100"

  if (isExternal) {
    return <a href={href} {...props} className={`${defaultClasses} ${className}`} target="_blank" rel="noopener noreferrer">{children}</a>;
  }

  return <Link href={href} className={`${defaultClasses} ${className}`}>{children}</Link>
}