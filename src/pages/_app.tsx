import type { AppProps } from "next/app";
import { useQueryParams } from "@/utils/useQueryParams";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Container from "@mui/material/Container";
import SuccessModal from "@/components/SuccessModal";
import "@/styles/globals.scss";

const stripeSrc: string = "https://js.stripe.com/v3/buy-button.js";

export default function App({ Component, pageProps }: AppProps) {
  const { showModal, setShowModal, clearQueryParams } = useQueryParams();

  const handleClose = () => {
    setShowModal(false);
    clearQueryParams();
  };

  return (
    <div>
      <Head>
        <meta name="description" content="National Association of Orthopedic Technicians" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <title>NAOT</title>
        <script async src={stripeSrc} />
      </Head>
      <SuccessModal show={showModal} handleClose={handleClose} />
      <Navbar />
      <Container sx={{ maxWidth: "1000px" }}>
        <Component {...pageProps} />
      </Container>
    </div>
  );
}
