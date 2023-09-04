'use client'

import { useState, useEffect, useRef } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';
import Hamburger from 'components/mobileMenu';
import LogoColorChange from 'components/logoColorChange';

function Header(props) {
  const minHeight = 10;
  const maxHeight = 55;
  const [showTimetable, setShowTimetable] = useState(false);
  const [mobileToggled, setMobileToggled] = useState(false);
  const mobileToggledRef = useRef(mobileToggled);

  const handleScroll = () => {
    const newHeight = Math.max(maxHeight - window.scrollY, minHeight);
    if (newHeight >= minHeight && newHeight <= maxHeight && !mobileToggledRef.current) {
      props.setHeaderHeight(newHeight)
      props.setHeaderMinified(newHeight > minHeight)
    } 
   };

   useEffect(() => {
    mobileToggledRef.current = mobileToggled
    props.setHeaderMinified(mobileToggled)
    handleScroll()
   }, [mobileToggled])

   useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
   }, []);

  return (
    <header id="header">
      <Container>
        <Row className={`${props.headerMinified ? '' : 'minified'}`} id="header-row" style={{paddingBottom: props.headerHeight}}>
          <Col xs={8} md={2}>
            <div className="fixed-logo">
              <Link onClick={() => setMobileToggled(false)} className="logo" id="logo" href="/">Iyengar Yoga Centre<span><br/>of Wellington<br/>New Zealand</span></Link>
              <Link onClick={() => setMobileToggled(false)} className="logo" id="logo-overlay" href="/">Iyengar Yoga Centre</Link>
            </div>
            {/*<LogoColorChange />*/}
          </Col>
          <Col className="d-none d-md-block" style={{pointerEvents: 'none'}} />
          <Col className="hamburger-container col-4">
            <Hamburger mobileToggled={mobileToggled} setMobileToggled={setMobileToggled} />
          </Col>
          <Col xs={12} md={6} className={`nav-wrapper ${mobileToggled ? 'mobile-toggled' : ''}`}>
            <nav >
              <Row>
                <Col>
                  <ul>
                    <li><Link onClick={() => setMobileToggled(false)} href="/#">Home</Link></li>
                    <li><Link onClick={() => setMobileToggled(false)} scroll={false} href="/#new-students">New students</Link></li>
                    <li><Link onClick={() => setMobileToggled(false)} scroll={false} href="/#class-descriptions">Class descriptions</Link></li>
                    <li><Link onClick={() => setMobileToggled(false)} scroll={false} href="/#pricing">Booking and pricing</Link></li>
                    <li><Link onClick={() => setMobileToggled(false)} scroll={false} href="/#attending">Attending class</Link></li>
                    {/*<li><Link onClick={() => setMobileToggled(false)} href="/retreats">Retreats</Link></li>*/}
                  </ul>
                </Col>
                <Col>
                  <ul>
                    <li><Link onClick={() => setMobileToggled(false)} href="/our-studio">Our studio</Link></li>
                    <li><Link onClick={() => setMobileToggled(false)} scroll={false} href="/our-studio#our-teachers">Our teachers</Link></li>
                    <li><Link onClick={() => setMobileToggled(false)} scroll={false} href="/our-studio#why-iyengar">Why Iyengar yoga?</Link></li>
                    <li><Link onClick={() => setMobileToggled(false)} scroll={false} href="#footer">Contact</Link></li>
                  </ul>
                </Col>
                <Col>
                  <ul>
                    <li className="fw-bold"><Link onClick={() => setMobileToggled(false)} href="/timetable">Timetable</Link></li>
                  </ul>
                </Col>
              </Row>
            </nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
