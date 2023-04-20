import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Link from 'next/link';
import Image from 'next/image'

function Footer() {
	return (
		<footer className="py-5 bg-blue" id="footer">
			<Container>
				<Row>
				  <Col></Col>
				  <Col xs={12} md={8}>
				    <Row>
				    	<Col xs={12} md={3}><h3>Contact</h3></Col>
				    	<Col xs={12} md={3}>
				    		<h3>Iyengar Yoga Centre</h3>
				    		<p>"The Bakehouse"<br/>6 Swan Lane<br/>Te Aro<br/>Wellington<br/>New Zealand</p>
				    	</Col>
				    	<Col xs={12} md={6}>
				    		<p>Our studio is in The Bakehouse, a beautiful historic brick building from 1912. Swan Lane is a walkway between Floriditas on Cuba St and Marion St. The entrance is on the side of the "The Bakehouse", through the stainless steel door, upstairs and to the left. (Above Noble Rot Wine Bar.)</p>
				    		<p>Email: <Link href="mailto:tessa@wellingtonyoga.co.nz">tessa@wellingtonyoga.co.nz</Link></p>
				    		<p><Link href="https://www.facebook.com/IyengarYogaCentreWellington/" target="_blank">Facebook</Link></p>
				    		<p><Link href=" https://www.instagram.com/iyengaryogawellington/" target="_blank">Instagram</Link></p>
				    	</Col>
				    </Row>
				  </Col>
				  <Col></Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer