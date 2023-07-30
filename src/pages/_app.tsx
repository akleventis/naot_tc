import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import { useQueryParams } from '@/utils/useQueryParams';
import data from '@/data/data.json';
import { SharedData } from '@/utils/interfaces';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Container from '@mui/material/Container';
import SuccessModal from '@/components/SuccessModal';
import '@/styles/globals.scss';

let theme = createTheme({
  palette: {
    primary: {
      main: '#2774AE',
    },
    secondary: {
      main: '#FFD100',
    },
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          marginRight: '5px',
          fontSize: 'small',
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'h6',
          },
          style: {
            color: '#2774AE',
            fontWeight: 'normal',
            display: 'inline-block',
            borderBottom: '3px solid #FFD100',
          },
        },
        {
          props: {
            variant: 'h5',
          },
          style: {
            color: '#2774AE',
            fontSize: '20px',
            display: 'inline-block',
            borderBottom: '3px solid #FFD100',
          },
        },
      ],
    },
  },
});

theme = responsiveFontSizes(theme);

export default function App({ Component, pageProps }: AppProps) {
  const sharedData: SharedData = data.constants
  const { showModal, setShowModal, clearQueryParams } = useQueryParams();

  const handleClose = () => {
    setShowModal(false);
    clearQueryParams();
  };

  const containerSX = {
    maxWidth: '1000px',
    padding: '4em 0 2em 0'
  }

  return (
    <>
      <Head>
        <meta name='description' content={sharedData.title.sm} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name="description" content="National Association of Orthopaedic Technologists" />
        <meta name="keywords" content="NAOT, Casting, Workshop, Orthopedic, Orthopaedic, Skills Workshop, National Association of Orthopaedic Technologists, AOTC, Ortho" />
        <title>{sharedData.title.sm}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <SuccessModal show={showModal} handleClose={handleClose} />
        <Navbar />
        <Container sx={containerSX}>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
      <Footer />
    </>
  );
}
