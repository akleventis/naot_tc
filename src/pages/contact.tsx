import data from '@/data/data.json';
import { SharedData } from '@/utils/interfaces';
import { useRef } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import emailjs from '@emailjs/browser';


function Contact() {
  const sharedData: SharedData = data.constants;
  const mailHref = `mailto:${sharedData.contact.email}`

  const formRef = useRef<HTMLFormElement>(null);
  
  const [public_key, service_id, template_id] = [
    process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
    process.env.NEXT_PUBLIC_EMAIL_SERVICE,
    process.env.NEXT_PUBLIC_EMAIL_TEMPLATE,
  ];

  const handleSendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(service_id!, template_id!, formRef.current!, public_key).then(
      (result) => {
        console.log(result.text);
        formRef.current?.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const c1SX = {
    maxWidth: '1000px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  };
  const c2SX = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '400px',
    '@media (max-width: 500px)': {
      width: '350px',
      fontSize: '90%',
    },
  };

  return (
    <main>
      <Container sx={c1SX}>
        <div>
          <Typography variant='h5' sx={{ mb: '.5em' }}>
            {sharedData.contact.title}
          </Typography>
          <Typography variant='body1' color='text.secondary' sx={{ mb: '.5em' }}>
            {sharedData.contact.body}
          </Typography>
        </div>
        <form id='email-form' onSubmit={handleSendEmail} ref={formRef}>
          <Container sx={c2SX}>
            <TextField
              type='email'
              label='Email Address'
              required
              name='from_email'
              autoComplete='off'
              autoCorrect='off'
              sx={{ mb: '1.5em' }}
            />

            <TextField
              type='text'
              label='Full Name'
              required
              name='from_name'
              autoComplete='off'
              autoCorrect='off'
              sx={{ mb: '1.5em' }}
            />

            <TextField
              multiline
              rows={5}
              label='Message'
              required
              name='message'
              sx={{ mb: '1.5em' }}
            />

            <Button variant='contained' type='submit'>
              Submit
            </Button>
          </Container>
        </form>
        <Typography variant='body1' color='text.secondary' sx={{ mt: '.5em' }}>
          emails are sent to:{' '}
          <a style={{ textDecoration: 'underline' }} href={mailHref}>
            <em>{sharedData.contact.email}</em>
          </a>
        </Typography>
      </Container>
    </main>
  );
}

export default Contact;
