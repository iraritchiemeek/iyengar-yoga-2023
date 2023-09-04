import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

export default function HomePage() {
  const [iframeUrl, setIframeUrl] = useState("https://wellingtonyoga.punchpass.com/calendar?embed=true");

  useEffect(() => {
    function checkSize() {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      setIframeUrl(isMobile ? "https://wellingtonyoga.punchpass.com/classes?embed=true" : "https://wellingtonyoga.punchpass.com/calendar?embed=true");
    }

    checkSize(); // Check immediately on mount

    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <main>
      <Container>
        <iframe name="frame2" src={iframeUrl} height="1500" width="100%" frameBorder="0" allowFullScreen></iframe>
      </Container>
    </main>
  );
}
