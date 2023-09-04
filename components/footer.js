'use client'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Link from 'next/link';
import Image from 'next/image'

function Footer() {
	return (
		<footer className="bg-blue" id="footer">
			<Container>
				<Row>
				  <Col></Col>
				  <Col xs={12} md={8}>
				    <Row>
				    	<Col xs={12} md={3}><h3>Contact</h3></Col>
				    	<Col xs={12} md={3}>
				    		<h3>Iyengar Yoga Centre</h3>
				    		<p>The Bakehouse<br/>6 Swan Lane<br/>Te Aro<br/>Wellington<br/>New Zealand</p>
				    	</Col>
				    	<Col xs={12} md={6}>
				    		<p>Our studio is in The Bakehouse, a beautiful historic brick building from 1911. Swan Lane is a walkway between Floriditas on Cuba St and Marion St. The entrance is on the side of the The Bakehouse, through the stainless steel door, upstairs and to the left - above Noble Rot Wine Bar.</p>
				    		<p>Email: <a href="mailto:tessa@wellingtonyoga.co.nz">tessa@wellingtonyoga.co.nz</a></p>
				    		<p><a href="https://www.facebook.com/IyengarYogaCentreWellington/" target="_blank">Facebook</a></p>
				    		<p><a href=" https://www.instagram.com/iyengaryogawellington/" target="_blank">Instagram</a></p>
				    	</Col>
				    </Row>
				  </Col>
				  <Col>
				  </Col>
				</Row>
				<Row>
				  <Col></Col>
				  <Col xs={12} md={8}>
				    <Row>
				    	<Col xs={12} md={3}></Col>
				    	<Col xs={12} md={9} style={{position: 'relative', height: '500px'}}>
				    		<Image src="/map.svg" alt="map" fill />
				    	</Col>
				    </Row>
				  </Col>
				  <Col>
				  </Col>
				</Row>
				<p>© Copyright Tessa Meek {new Date().getFullYear()}. All rights reserved.</p>
			</Container>
		</footer>
	)
}

export default Footer