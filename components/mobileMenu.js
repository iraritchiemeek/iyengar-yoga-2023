import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';

const Hamburger = (props) => {

  return (
  	<>
  	<div className="w-100 d-flex justify-content-end">
		  <div className={`hamburger-menu ${props.mobileToggled ? 'open' : ''}`} onClick={() => props.setMobileToggled(!props.mobileToggled)} >
		    <div className="line line1"></div>
		    <div className="line line2"></div>
		    <div className="line line3"></div>
		    <div className="line line4"></div>
		  </div>
  	</div>
	  </>
  );
};

export default Hamburger;
