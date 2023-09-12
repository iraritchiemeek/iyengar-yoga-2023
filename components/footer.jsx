import Image from 'next/image'
import { StartContentGridItem, CenterContentGridItem, EndContentGridItem } from './grid';
import { StyledLink } from './text';

function Footer() {
	return (
		<footer className="bg-yoga-blue pt-48 mt-24" id="footer">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-6 [&>*]:px-3">
					<StartContentGridItem>
						<h2>Contact</h2>
					</StartContentGridItem>
					<CenterContentGridItem>
						<h2 className='text-xl pb-2'>Iyengar Yoga Centre</h2>
						<a className='underline' href='https://goo.gl/maps/UCfiqUtjkZNVWfFr5' target="_blank"><p>The Bakehouse<br/>6 Swan Lane<br/>Te Aro<br/>Wellington<br/>New Zealand</p></a>
					</CenterContentGridItem>
					<EndContentGridItem>
						<p>Our studio is in The Bakehouse, a beautiful historic brick building from 1911. Swan Lane is a walkway between Floriditas on Cuba St and Marion St. The entrance is on the side of the The Bakehouse, through the stainless steel door, upstairs and to the left - above Noble Rot Wine Bar.</p>
						<p>Email: <a href="mailto:tessa@wellingtonyoga.co.nz" className='underline'>tessa@wellingtonyoga.co.nz</a></p>
						<p className='underline'><a href="https://www.facebook.com/IyengarYogaCentreWellington/" target="_blank">Facebook</a></p>
						<p className='underline'><a href=" https://www.instagram.com/iyengaryogawellington/" target="_blank">Instagram</a></p>
					</EndContentGridItem>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-6 [&>*]:px-3 pt-12'>
					<div className='col-span-6 md:col-start-3 md:col-span-3'><a href='https://goo.gl/maps/UCfiqUtjkZNVWfFr5' target="_blank">
						<Image width="890" height="565" src="/map.svg" alt="map" className='object-center'  />
					</a></div>
				</div>
				<p className='pt-24 pb-4 px-3'>© Copyright Tessa Meek {new Date().getFullYear()}. All rights reserved.</p>
			</div>
		</footer>
	)
}

export default Footer