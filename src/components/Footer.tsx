import { AppBar, Box, Typography } from '@mui/material';

export default function Footer() {
  const copywriteText = '© 2023 National Association of Orthopaedic Technologists'
  const boxSX = { bottom: 0, position: 'fixed', width: '100%' };
  const barSX = { opacity: '95%', bottom: 0, height: '1em', position: 'relative', textAlign: 'right'};
  const textSX = {fontSize: '10px', marginRight: '5px'}
  return (
    <Box sx={boxSX}>
      <AppBar sx={barSX}>
        <Typography sx={textSX}>{copywriteText}</Typography>
      </AppBar>
    </Box>
  );
}
