import React from "react";
import { Form,Button, option } from "react-bootstrap";

const ContactScreen = () => {
  return (
    <>
        <h1 className="text-center">Contact</h1>
      <Form  className='text-center'>
        <Form.Group controlId='exampleForm.ControlInput1'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='name@example.com' />
        </Form.Group>
        <Form.Group>
          <Form.Label>Subject</Form.Label>
          <Form.Control type='text' placeholder='Normal text' />
        </Form.Group>

        <Form.Group controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Message</Form.Label>
          <Form.Control as='textarea' rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
    Submit
  </Button>
      </Form>
    </>
  );
};

export default ContactScreen;
