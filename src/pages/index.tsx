import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import { useQueryParams } from '@/utils/useQueryParams';
import Navbar from '@/components/Navigation';
import SuccessModal from '@/components/SuccessModal';
import Dropdown from '@/components/Dropdown';
import 'bootstrap-icons/font/bootstrap-icons.css';

// import styles from '@/styles/Home.module.css';
{
  /* <main className={`${styles.main} ${inter.className}`}></main> */
}

const stripeSrc: string = 'https://js.stripe.com/v3/buy-button.js'

export default function Home() {
  const { showModal, setShowModal, eventKey, setEventKey, clearQueryParams } = useQueryParams();

  const handleClose = () => {
    setShowModal(false);
    clearQueryParams();
  };

  return (
    <>
      <Head>
        <title>App</title>
        <script async src={stripeSrc} />
      </Head>
      <main>
        <Navbar />
        <Container style={{ maxWidth: '1000px' }}>
          <SuccessModal show={showModal} handleClose={handleClose}/>
          <Dropdown eventKey={eventKey} setEventKey={setEventKey}/>
        </Container>
      </main>
    </>
  );
}
