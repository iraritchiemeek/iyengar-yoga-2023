import Link from 'next/link'

export function SecondaryButton({children, href, className}) {

  return (
    <Link href={href} className={`bg-white px-4 py-2 font-semibold ring-1 ring-gray-300 hover:bg-yoga-blue hover:text-white transition-colors inline-block ${className}`} >
      {children}
    </Link>
  )
}