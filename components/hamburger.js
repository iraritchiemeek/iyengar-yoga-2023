import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [toggled, setToggled] = useState(false);

  return (
  	<div className="w-100 d-flex justify-content-end">
		  <div className={`hamburger-menu ${toggled ? 'open' : ''}`} onClick={() => setToggled(!toggled)} >
		    <div className="line line1"></div>
		    <div className="line line2"></div>
		    <div className="line line3"></div>
		    <div className="line line4"></div>
		  </div>
  	</div>
  );
};

export default HamburgerMenu;
