import Head from 'next/head';
// import * as React from 'react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useQueryParams } from '@/utils/useQueryParams';
import Navbar from '@/components/Navigation';
import BuyButtonComponent from '@/components/BuyButton';
import ConferenceCard from '@/components/ConferenceCard';
import SuccessModal from '@/components/SuccessModal';
import ConferenceInfo from '@/components/ConferenceInfo';
import Dropdown from '@/components/Dropdown';
import 'bootstrap-icons/font/bootstrap-icons.css';

// import styles from '@/styles/Home.module.css';
{
  /* <main className={`${styles.main} ${inter.className}`}></main> */
}

export default function Home() {
  const { showModal, setShowModal, clearQueryParams } = useQueryParams();

  const handleClose = () => {
    setShowModal(false);
    clearQueryParams();
  };

  return (
    <>
      <Head>
        <title>App</title>
        <script async src='https://js.stripe.com/v3/buy-button.js' />
      </Head>
      <main>
        <Navbar />
        <Container style={{ maxWidth: '1000px' }}>
          <SuccessModal show={showModal} handleClose={handleClose}/>
          <Dropdown />
          {/* <BasicExample /> */}
          {/* <ConferenceCard /> */}
          {/* <ConferenceInfo /> */}
          {/* <BuyButtonComponent /> */}
        </Container>
      </main>
    </>
  );
}
