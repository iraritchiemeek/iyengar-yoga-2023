import Link from 'next/link'

export function PrimaryButton({children, href, className}) {

  return (
    <Link href={href} role="button" className={`rounded shadow-sm bg-white px-5 py-2 font-semibold bg-yoga-blue text-black hover:bg-yoga-blue/50 focus:bg-white focus:ring-2 transition-colors inline-block ${className}`} >
      {children}
    </Link>
  )
}