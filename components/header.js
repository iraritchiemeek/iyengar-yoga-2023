import { useState, useEffect, useRef } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';
import Hamburger from 'components/mobileMenu';

function Header(props) {
  // const minHeight = 46;
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
            <Link id="logo" href="/">Iyengar Yoga Centre<span><br/>of Wellington<br/>New Zealand</span></Link>
          </Col>
          <Col className="d-none d-md-block" />
          <Col className="d-md-none">
            <Hamburger mobileToggled={mobileToggled} setMobileToggled={setMobileToggled} />
          </Col>
          <Col xs={12} md={6} className={`nav-wrapper ${mobileToggled ? 'mobile-toggled' : ''}`}>
            <nav >
              <Row>
                <Col>
                  <ul>
                    <li><Link href="/#">The Practice</Link></li>
                    <li><Link href="/#new-students">New students</Link></li>
                    <li><Link href="/#class-levels">Class levels</Link></li>
                    <li><Link href="/#pricing">Pricing</Link></li>
                  </ul>
                </Col>
                <Col>
                  <ul>
                    <li><Link href="/our-studio">Our Studio</Link></li>
                    <li><Link href="/about#teachers">Teachers</Link></li>
                    <li><Link href="#footer">Contact</Link></li>
                    <li><Link href="#footer">Retreats</Link></li>
                  </ul>
                </Col>
                <Col>
                  <ul>
                    <li className="fw-bold"><Link href="/timetable">Timetable</Link></li>
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
