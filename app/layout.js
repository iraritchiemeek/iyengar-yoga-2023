import './globals.css'
import BgGrid from 'components/bgGrid'
import Header from 'components/header'
import Footer from 'components/footer'
import ScrollProgressBar from 'components/scrollProgressBar'
import { Analytics } from '@vercel/analytics/react';
import localFont from 'next/font/local'

const moderat = localFont({
  src: [
    {
      path: '../fonts/Moderat/Moderat-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Moderat/Moderat-Bold.woff2',
      weight: '800',
    },
  ],
})

export const metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={moderat.className}>
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