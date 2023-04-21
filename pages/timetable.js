import Image from 'next/image'
import {Container, Row, Col} from 'react-bootstrap';

export default function HomePage({ page }) {

  return (
    <main>
      <Container >
        <iframe name="frame2" src="https://wellingtonyoga.punchpass.com/calendar?embed=true" height="1500" width="100%" frameBorder="0" allowFullScreen></iframe>
      </Container>
    </main>
  );
}
