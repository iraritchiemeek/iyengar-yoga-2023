import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';

function Header() {
  const [showTimetable, setShowTimetable] = useState(false);

  const handleShowTimetableChange = () => {
    setShowTimetable(!showTimetable);
  };

  return (
    <Container>
      <Row className="bg-white py-5">
        <Col xs={2}>
          <Link id="logo" href="/">Iyengar Yoga Centre<br/>of Wellington<br/>New Zealand</Link>
        </Col>
        <Col />
        <Col xs={4}>
          <nav>
            <Row>
              <Col>
                <Link href="#" onClick={handleShowTimetableChange}>Timetable</Link>
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
  );
}

export default Header;
