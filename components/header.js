import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';

function Header(props) {
  const minHeight = 46;
  const heightToMinify = 100;
  const maxHeight = 190;
  const [showTimetable, setShowTimetable] = useState(false);
  const [minified, setMinified] = useState(false)

  const handleScroll = () => {
    const newHeight = Math.max(maxHeight - window.scrollY, minHeight);
    if (newHeight >= minHeight && newHeight <= maxHeight) {
      props.setHeaderHeight(newHeight)
      setMinified(newHeight > heightToMinify)
    } 
   };

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
        <Row className={`d-flex align-items-center ${minified ? '' : 'minified'}`} id="header-row" style={{height: props.headerHeight}}>
          <Col xs={2}>
            <Link id="logo" href="/">Iyengar Yoga Centre<span className="hideable"><br/>of Wellington<br/>New Zealand</span></Link>
          </Col>
          <Col />
          <Col xs={4}>
            <nav className="hideable">
              <Row>
                <Col>
                  <Link href="#" >Timetable</Link>
                </Col>
                <Col>
                  <ul>
                    <li><Link href="/#new-students">New students</Link></li>
                    <li><Link href="/#class-levels">Class levels</Link></li>
                    <li><Link href="/#pricing">Pricing</Link></li>
                  </ul>
                </Col>
                <Col>
                  <ul>
                    <li><Link href="/about#about">About</Link></li>
                    <li><Link href="/about#teachers">Teachers</Link></li>
                    <li><Link href="#footer">Contact</Link></li>
                    <li><Link href="#footer">Retreats</Link></li>
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
