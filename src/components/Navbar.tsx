import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../../public/naot_logo.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

const styleBox = { flexGrow: 1, marginBottom: "1em" }
const styleContainer = { maxWidth: '1200px', }
const styleImg = { width: 55, height: 55, cursor: "pointer", };
const styleHeader = { flexGrow: 1, textAlign: "center", };
const styleButton = { fontSize: "17px", color: 'inherit', fontWeight: "inherit", };

export default function Navbar() {
  const router = useRouter();
  const handleContact = () => {
    router.push("/contact");
  };
  const handleIndex = () => {
    router.push("/");
  };
  return (
    <Box sx={styleBox}>
      <AppBar position="static">
        <Container sx={styleContainer}>
          <Toolbar >
            <Image src={logo} alt="NOAT logo" style={styleImg} onClick={handleIndex} />
            <Container sx={styleHeader} >
              <Button sx={styleButton} onClick={handleIndex} >
                National Association of Orthopaedic Technologists
              </Button>
            </Container>
            <Button color='inherit' onClick={handleContact}>
              Contact
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
