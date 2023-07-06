import { Modal, Box, Typography, useTheme } from '@mui/material';

function SuccessModal({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: () => void;
}) {
  const theme = useTheme()
  const title = 'Success!';
  const body = 'You should receive an email shortly regarding your processed payment';

  const modalSX = {
    position: 'absolute' as 'absolute',
    top: '15%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 175,
    borderRadius: '5px',
    bgcolor: 'white',
    border: `1px solid ${theme.palette.secondary.main}`,
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={show}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      disableAutoFocus={true}
    >
      <Box sx={modalSX}>
        <Typography id='modal-modal-title' variant='h6' border={'none'} component='h2'>
          {title}
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          {body}
        </Typography>
      </Box>
    </Modal>
  );
}

export default SuccessModal;
