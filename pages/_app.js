import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.scss'
import { useState } from 'react';
import BgGrid from 'components/bgGrid'
import Header from 'components/header'
import Footer from 'components/footer'
import { ParallaxProvider } from 'react-scroll-parallax';
import { useRouter } from 'next/router'
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  const [headerHeight, setHeaderHeight] = useState(55);
  const [headerMinified, setHeaderMinified] = useState(false)
  const router = useRouter()

  return (
    <ParallaxProvider>
      {router.asPath != '/timetable' &&
        <BgGrid />
      }
      <Header headerHeight={headerHeight} setHeaderHeight={setHeaderHeight} headerMinified={headerMinified} setHeaderMinified={setHeaderMinified} />
      <div style={{paddingTop: headerHeight + 150}}>
        <Component {...pageProps} />
      </div>
      <Footer />
      <Analytics />
    </ParallaxProvider>
  )
}
