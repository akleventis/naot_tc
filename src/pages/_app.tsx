import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import { useQueryParams } from '@/utils/useQueryParams';
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

const title = 'NAOT';
const content = 'National Association of Orthopedic Technicians';

export default function App({ Component, pageProps }: AppProps) {
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
        <meta name='description' content={content} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{title}</title>
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
