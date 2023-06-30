import type { AppProps } from "next/app";
import { useQueryParams } from "@/utils/useQueryParams";
import Navbar from "@/components/Navbar";
import Container from "@mui/material/Container";
import SuccessModal from "@/components/SuccessModal";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  const { showModal, setShowModal, clearQueryParams } = useQueryParams();

  const handleClose = () => {
    setShowModal(false);
    clearQueryParams();
  };

  return (
    <>
      <SuccessModal show={showModal} handleClose={handleClose} />
      <Navbar />
      <Container sx={{ maxWidth: "1000px" }}>
        <Component {...pageProps} />
      </Container>
    </>
  );
}
