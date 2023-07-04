import { useState, useRef } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";
import emailjs from "@emailjs/browser";

const titleSX = {display: 'inline-block', paddingBottom: '.2em', width: '250px', color: "#2774AE", borderBottom: '3px solid #FFD100'}
const bodySX = {marginTop: '.5em'}
const Section = styled("div")({
  marginBottom: "1.5rem",
});

function Contact() {
    const formRef = useRef<HTMLFormElement>(null);

  const [public_key, service_id, template_id] = [
    process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
    process.env.NEXT_PUBLIC_EMAIL_SERVICE,
    process.env.NEXT_PUBLIC_EMAIL_TEMPLATE,
  ];

  const handleSendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(service_id!, template_id!, formRef.current!, public_key)
      .then(
        (result) => {
          console.log(result.text);
          formRef.current?.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <main>
      <Container style={{ maxWidth: "1000px" }} sx={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
          <Section>
            <Typography variant="h4" sx={titleSX}>Contact Us</Typography>
            <Typography color='text.secondary' sx={bodySX}>
              Make sure to include your email address, name, and message body. We'll reach back as soon as possible.
            </Typography>
          </Section>

          <form id="email-form" onSubmit={handleSendEmail} ref={formRef}>
          <Container sx={{ display: "flex", justifyContent: "center", flexDirection: 'column', width: '450px'}}>
            <TextField type="email" label="Email Address" required name="from_email" autoComplete="off" autoCorrect="off" sx={{marginBottom: '1.5em'}}/>

            <TextField type="text" label="Full Name" required name="from_name" autoComplete="off" autoCorrect="off" sx={{marginBottom: '1.5em'}}/>

            <TextField multiline rows={5} label="Message" required name="message" sx={{marginBottom: '1.5em'}}/>

            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Container>
          </form>
        </div>
      </Container>
    </main>
  );
}

export default Contact;
