import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const style = {
  position: 'absolute' as 'absolute',
  top: '15%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 175,
  borderRadius: "5px",
  bgcolor: 'white',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};
 
function SuccessModal({ show, handleClose }: { show: boolean; handleClose: () => void}) {
  return (
      <Modal
        open={show}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableAutoFocus={true}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Success!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            You should receive an email shortly regarding your processed payment
          </Typography>
        </Box>
      </Modal>
  );
}

export default SuccessModal;
