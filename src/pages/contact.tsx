import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import styles from "@/styles/Contact.module.scss";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

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
      <Container
        style={{ maxWidth: "1000px" }}
        className="d-flex justify-content-center"
      >
        <div className="d-flex flex-column text-align-center">
          <div className={styles.section}>
            <h4>Contact Us</h4>
            <p>
              {" "}
              Make sure to include your email address, name, and message body.
              We'll reach back as soon as possible
            </p>
          </div>

          <form
            id="email-form"
            className={styles.section}
            onSubmit={handleSendEmail}
            ref={formRef}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email Address"
                required
                name="from_email"
                autoComplete="off"
                autoCorrect="off"
                className="feedback-input"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmailSubject">
              <Form.Control
                type="text"
                placeholder="Full Name"
                required
                name="from_name"
                autoComplete="off"
                autoCorrect="off"
                className="feedback-input"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmailBody">
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Message"
                required
                name="message"
                className="feedback-input"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </Container>
    </main>
  );
}

export default Contact;
