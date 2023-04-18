import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';

function Header() {
  const [showTimetable, setShowTimetable] = useState(false);

  const handleShowTimetableChange = () => {
    console.log('test');
    console.log(showTimetable);
    setShowTimetable(!showTimetable);
  };

  return (
    <Navbar className="bg-white w-100 py-5">
      <Row className="w-100">
        <Col xs={3}>
          <Navbar.Brand id="logo" href="/">Iyengar Yoga Centre<br/>of Wellington<br/>New Zealand</Navbar.Brand>
        </Col>
        <Col />
        <Col xs={5}>
          <Navbar.Toggle />
          <Nav>
            <Navbar.Collapse>
              <Row className="w-100">
                <Col className="">
                  <Nav.Item onClick={handleShowTimetableChange}>Timetable</Nav.Item>
                </Col>
                <Col className="">
                  <Nav.Item><Link href="/#new-students">New students</Link></Nav.Item>
                  <Nav.Item><Link href="/#class-levels">Class levels</Link></Nav.Item>
                  <Nav.Item><Link href="/#pricing">Pricing</Link></Nav.Item>
                </Col>
                <Col className="">
                  <Nav.Item><Link href="/about#about">About</Link></Nav.Item>
                  <Nav.Item><Link href="/about#teachers">Teachers</Link></Nav.Item>
                  <Nav.Item><Link href="#footer">Contact</Link></Nav.Item>
                </Col>
                <Col>
                  <Nav.Item><Link href="/retreats">Retreats</Link></Nav.Item>
                </Col>
              </Row>
            </Navbar.Collapse>
          </Nav>
        </Col>
      </Row>
    </Navbar>
  );
}

export default Header;
