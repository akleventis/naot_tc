import type { AppProps } from "next/app";
import  Head  from 'next/head'
import { ThemeProvider, createTheme } from "@mui/material";
import { useQueryParams } from "@/utils/useQueryParams";
import Navbar from "@/components/Navbar";
import Container from "@mui/material/Container";
import SuccessModal from "@/components/SuccessModal";
import "@/styles/globals.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2774AE"
    },
    secondary: {
      main: "#FFD100"
    }
  }
})

const title = "NAOT"
const content = "National Association of Orthopedic Technicians"

export default function App({ Component, pageProps }: AppProps) {
  const { showModal, setShowModal, clearQueryParams } = useQueryParams();

  const handleClose = () => {
    setShowModal(false);
    clearQueryParams();
  };

  return (
    <>
      <Head>
        <meta name="description" content={content} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
      </Head>
      <ThemeProvider theme={theme}>
      <SuccessModal show={showModal} handleClose={handleClose} />
      <Navbar />
      <Container sx={{ maxWidth: "1000px"}}>
        <Component {...pageProps} />
      </Container>
      </ThemeProvider>
    </>
  );
}
