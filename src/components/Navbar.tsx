import { useRouter } from 'next/router';
import logo from '../../public/logos/logo_fill.png';
import Image from 'next/image';
import {AppBar, Box, Toolbar, Button, Container } from '@mui/material'

const title = 'National Association of Orthopaedic Technologists';
const contact = 'Contact';

export default function Navbar() {
  const router = useRouter();
  
  const routeContact = () => router.push('/contact');
  const routeIndex = () => router.push('/');
  
  const boxSX = { flexGrow: 1, marginBottom: '1em' };
  const barSX = {opacity: '95%', position: 'fixed'}
  const containerSX = { maxWidth: '1200px' };
  const imgSX = { width: 55, height: 55, cursor: 'pointer' };
  const headerSX = { flexGrow: 1, textAlign: 'center' };
  const buttonSX = { fontSize: '15px', color: 'inherit', fontWeight: 'inherit' };

  return (
    <Box sx={boxSX}>
      <AppBar sx={barSX}>
        <Container sx={containerSX}>
          <Toolbar>
            <Image
              src={logo}
              alt='logo'
              style={imgSX}
              onClick={routeIndex}
            />
            <Container sx={headerSX}>
              <Button sx={buttonSX} onClick={routeIndex}>
                {title}
              </Button>
            </Container>
            <Button sx={buttonSX} onClick={routeContact}>
              {contact}
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
