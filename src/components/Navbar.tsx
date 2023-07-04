import { useRouter } from "next/router";
import logo from "../../public/logos/logo_fill.png";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

const title = "National Association of Orthopaedic Technologists";
const contact = "Contact";

const styleBox = { flexGrow: 1, marginBottom: "1em" };
const styleBar = {opacity: '95%'}
const styleContainer = { maxWidth: "1200px" };
const styleImg = { width: 55, height: 55, cursor: "pointer" };
const styleHeader = { flexGrow: 1, textAlign: "center" };
const styleButton = { fontSize: "15px", color: "inherit", fontWeight: "inherit" };

export default function Navbar() {
  const router = useRouter();

  const routeContact = () => router.push("/contact");
  const routeIndex = () => router.push("/");

  return (
    <Box sx={styleBox}>
      <AppBar position="fixed" sx={styleBar}>
        <Container sx={styleContainer}>
          <Toolbar>
            <Image
              src={logo}
              alt="logo_fill"
              style={styleImg}
              onClick={routeIndex}
            />
            <Container sx={styleHeader}>
              <Button sx={styleButton} onClick={routeIndex}>
                {title}
              </Button>
            </Container>
            <Button color="inherit" onClick={routeContact}>
              {contact}
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
