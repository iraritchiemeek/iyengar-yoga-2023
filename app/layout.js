import './globals.css'
import BgGrid from 'components/bgGrid'
import Header from 'components/header'
import Footer from 'components/footer'
import ScrollProgressBar from 'components/scrollProgressBar'
import { Analytics } from '@vercel/analytics/react';


export const metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <BgGrid />
        <ScrollProgressBar />
        {/*<Header headerHeight={headerHeight} setHeaderHeight={setHeaderHeight} headerMinified={headerMinified} setHeaderMinified={setHeaderMinified} />*/}
        {children}
        <Footer />
        <Analytics /> 
      </body>
    </html>
  )
}