'use client'

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [iframeUrl, setIframeUrl] = useState("https://wellingtonyoga.punchpass.com/calendar?embed=true");

  useEffect(() => {
    function checkSize() {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      setIframeUrl(isMobile ? "https://wellingtonyoga.punchpass.com/classes?embed=true" : "https://wellingtonyoga.punchpass.com/calendar?embed=true");
    }

    checkSize();

    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
	  <iframe src={iframeUrl} height="1500" width="100%" frameBorder="0" allowFullScreen></iframe>
  );
}
