import { useRouter } from 'next/router';
import logo from '../../public/logos/logo_fill.png';
import data from '@/data/data.json';
import { SharedData } from '@/utils/interfaces';
import Image from 'next/image';
import { AppBar, Box, Toolbar, Button, Container } from '@mui/material';

export default function Navbar() {
  const sharedData: SharedData = data.constants;
  const router = useRouter();

  const routeContact = () => router.push('/contact');
  const routeIndex = () => router.push('/');

  const boxSX = { flexGrow: 1, marginBottom: '1em' };
  const barSX = { opacity: '95%', position: 'fixed' };
  const containerSX = { maxWidth: '1200px' };
  const imgSX = { width: 50, height: 50, cursor: 'pointer' };
  const headerSX = { flexGrow: 1, textAlign: 'center' };
  const buttonSX = {
    fontSize: '15px',
    color: 'inherit',
    fontWeight: 'inherit',
    '@media (max-width: 500px)': {
      fontSize: '12px',
    },
  };

  return (
    <Box sx={boxSX}>
      <AppBar sx={barSX}>
        <Container sx={containerSX}>
          <Toolbar>
            <Image src={logo} alt='logo' style={imgSX} onClick={routeIndex} />
            <Container sx={headerSX}>
              <Button sx={buttonSX} onClick={routeIndex}>
                {sharedData.title.lg}
              </Button>
            </Container>
            <Button sx={buttonSX} onClick={routeContact}>
              Contact
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
