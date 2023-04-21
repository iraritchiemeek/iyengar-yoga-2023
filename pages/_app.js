import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.scss'
import { useState } from 'react';
import BgGrid from 'components/bgGrid'
import Header from 'components/header'
import Footer from 'components/footer'
import { ParallaxProvider } from 'react-scroll-parallax';

export default function App({ Component, pageProps }) {
  const [headerHeight, setHeaderHeight] = useState(190);

  return (
    <ParallaxProvider>
      <BgGrid />
      <Header headerHeight={headerHeight} setHeaderHeight={setHeaderHeight} />
      <div style={{paddingTop: headerHeight}}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </ParallaxProvider>
  )
}
