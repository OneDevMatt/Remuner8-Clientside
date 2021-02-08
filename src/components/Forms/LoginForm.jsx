import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
} from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';

export default class LoginForm extends Component {
  static displayName = LoginForm.name;
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password: '',
      formText: 'Your username is most likely your email address',
      validate: {
        emailState: '',
        isValid: false,
        password: '',
        isValidPassword: false,
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    const {
      target: { name, value },
    } = event;
    const { validate } = this.state;
    if (!value) {
      validate.emailState = '';
      validate.isValid = false;
      this.setState({
        formText: 'Your username is most likely your email address',
        validate,
      });
    }
    this.setState({
      [name]: value,
      formText: '',
    });
  };

  validateEmail() {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { userName, validate } = this.state;
    if (emailRegex.test(userName)) {
      validate.emailState = 'has-success';
      validate.isValid = true;
    } else {
      validate.emailState = 'has-danger';
    }
    this.setState({ validate });
  }

  validatePassword() {
    const defPassword = '12345678';
    const { password, validate } = this.state;
    if (password === defPassword) {
      validate.isValidPassword = true;
      validate.password = 'has-success';
    } else validate.password = 'has-danger';
    this.setState({ validate });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.validateEmail();
    this.validatePassword();
    const {
      validate: { isValid, isValidPassword },
    } = this.state;
    if (isValid && isValidPassword) {
      <Redirect from="/login" to="/admin" />;
    }
  };

  render() {
    const { userName, validate, formText, password } = this.state;
    return (
      <>
        <p className="text-muted text-center mb-4">
          Don't have an account yet?
          <Link to="/register"> Sign Up</Link>
        </p>
        <Form action="" id="login-form" onSubmit={e => this.handleSubmit(e)}>
          <FormGroup className="mb-4">
            <Input
              type="email"
              name="userName"
              id="loginFormEmail"
              title="Username"
              placeholder="Username"
              required
              value={userName}
              valid={validate.emailState === 'has-success'}
              invalid={validate.emailState === 'has-danger'}
              onChange={e => {
                this.handleChange(e);
              }}
            />
            <FormFeedback>Invalid Username/Email Address</FormFeedback>
            <FormText>{formText}</FormText>
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              id="loginFormPassword"
              title="Password"
              placeholder="Password"
              required
              value={password}
              valid={validate.password === 'has-success'}
              invalid={validate.password === 'has-danger'}
              onChange={e => this.handleChange(e)}
            />
            <FormFeedback>Invalid Password</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Button className="mt-4" color="primary" block>
              SIGN IN
            </Button>
          </FormGroup>
        </Form>
        <div className="d-grid gap-2 mt-4 text-center">
          <Link to="/resetPassword">Forgot password?</Link>
        </div>
      </>
    );
  }
}
