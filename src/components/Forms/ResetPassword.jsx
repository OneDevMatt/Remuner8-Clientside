import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, FormFeedback, Input } from 'reactstrap';

const ResetPassword = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    if (Object.keys(errors).length === 0) {
      console.log('You are logged in');
      // Call an api here
    } else {
      this.setState({ errors });
    }
  };

  return (
    <>
      <h3 className="title text-center text-muted">Forgot Password?</h3>
      <p className="subtitle mt-3 text-center">
        Enter your email to get a password reset link
      </p>
      <Form>
        <FormGroup>
          <Input type="email" placeholder="Email Address" required />
        </FormGroup>

        <FormGroup>
          <Button type="submit" color="primary" block>
            RESET PASSWORD
          </Button>
        </FormGroup>
      </Form>
      <p className="text-center">
        Remember your password? <Link to="/login">Login</Link>
      </p>
    </>
  );
};

export default ResetPassword;
