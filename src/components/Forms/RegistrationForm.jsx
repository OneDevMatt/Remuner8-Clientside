import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, FormFeedback, Input } from 'reactstrap';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      data: {
        email: '',
        firstName: '',
        otherName: '',
        lastName: '',
        dateOfBirth: '',
        maritalStatus: '',
        gender: '',
        state: '',
        country: '',
        phoneNumber: '',
        phoneNumberPrefix: '+234',
        address: '',
        dateEmployed: '',
        bank: '',
        accountNumber: '',
        role: '',
        password: '',
        confirmPassword: '',
      },
      errors: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOnBlurEmail = this.handleOnBlurEmail.bind(this);
  }

  // handle data fields state change
  handleChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
      errors: {
        ...this.state.errors,
        [e.target.name]: '',
      },
    });
  };

  previousStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  validate = () => {
    const {
      data: { password, confirmPassword },
      errors,
    } = this.state;
    if (password.length < 8 || password.length > 32)
      errors.password = 'Password must be 8 - 32 characters long.';
    if (confirmPassword !== password)
      errors.confirmPassword = 'Passwords must match.';
    return errors;
  };

  handleOnBlurEmail = () => {
    const {
      data: { email },
      errors,
    } = this.state;
    if (email === '') errors.email = 'Email cannot be blank';
    if (!errors.email) {
      errors.emailState = 'valid';
      this.setState({ errors });
      // Call an api here
    } else {
      this.setState({ errors });
    }
  };

  handleOnBlurPassword = () => {
    const {
      data: { password, confirmPassword },
      errors,
    } = this.state;
    
    if (password.length < 8 || password.length > 32)
      errors.password = 'Password must be 8 - 32 characters long.';
    if (confirmPassword !== password)
      errors.confirmPassword = 'Passwords must match.';
    if (!errors.password) {
      errors.passwordState = 'valid';
      this.setState({ errors });
      if (!errors.confirmPassword) {
        errors.confirmPasswordState = 'valid';
        console.log('You are logged in');
        // Call an api here
      }
    } else this.setState({ errors });
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    if (Object.keys(errors).length === 0) {
      console.log('You are logged in');
      // Call an api here
    } else {
      this.setState({ errors });
    }
  };

  render() {
    // eslint-disable-next-line
    const { data, errors, messageEmail, messagePassword, step } = this.state;
    // const values = data;
    return (
      <>
        <p className="text-center mb-4">Access your dashboard</p>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup className="mb-3">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Email Address"
              required
              valid={errors.emailState === 'valid' ? true : false}
              invalid={errors.email ? true : false}
              value={data.email}
              onChange={e => this.handleChange(e)}
              onBlur={e => this.handleOnBlurEmail(e)}
            />
            <FormFeedback>{errors.email}</FormFeedback>
          </FormGroup>

          <FormGroup className="mb-3">
            <Input
              id="password"
              name="password"
              type="password"
              required
              value={data.password}
              valid={errors.passwordState === 'valid' ? true : false}
              invalid={errors.password ? true : false}
              placeholder="Enter Password"
              onChange={e => this.handleChange(e)}
              onBlur={e => this.handleOnBlurPassword(e)}
            />
            <FormFeedback>{errors.password}</FormFeedback>
          </FormGroup>
          <FormGroup className="mb-3">
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              value={data.confirmPassword}
              valid={errors.confirmPasswordState === 'valid' ? true : false}
              invalid={errors.confirmPassword ? true : false}
              placeholder="Confirm Password"
              onChange={e => this.handleChange(e)}
              onBlur={e => this.handleOnBlurPassword(e)}
            />
            <FormFeedback>{errors.confirmPassword}</FormFeedback>
          </FormGroup>
          <Button color="primary" block>
            SIGN UP
          </Button>
        </Form>
        <p className="text-muted text-center mt-4">
          Already have an account?
          <Link to="/login"> Sign In</Link>
        </p>
      </>
    );

    // switch (step) {
    //   case 1:
    //     return (
    //       <UserDetailsForm
    //         nextStep={this.nextStep}
    //         handleChange={this.handleChange}
    //         data={values}
    //         errors={errors}
    //       />
    //     );

    //   case 2:
    //     return (
    //       <PersonalDetailsForm
    //         previousStep={this.previousStep}
    //         nextStep={this.nextStep}
    //         handleChange={this.handleChange}
    //         data={values}
    //         errors={errors}
    //       />
    //     );

    //   case 3:
    //     return (
    //       <ContactDetailsForm
    //         previousStep={this.previousStep}
    //         nextStep={this.nextStep}
    //         handleChange={this.handleChange}
    //         data={values}
    //         errors={errors}
    //       />
    //     );

    //   case 4:
    //     return (
    //       <BankDetailsForm
    //         previousStep={this.previousStep}
    //         nextStep={this.nextStep}
    //         handleChange={this.handleChange}
    //         data={values}
    //         errors={errors}
    //       />
    //     );

    //   case 5:
    //     return (
    //       <PasswordSetup
    //         previousStep={this.previousStep}
    //         nextStep={this.nextStep}
    //         handleChange={this.handleChange}
    //         data={values}
    //         errors={errors}
    //       />
    //     );

    //   case 6:
    //     return (
    //       <ConfirmationPage
    //         previousStep={this.previousStep}
    //         nextStep={this.nextStep}
    //         data={values}
    //       />
    //     );

    //   case 7:
    //     return (
    //       <SuccessPage
    //         handleChange={this.handleChange}
    //         data={values}
    //         errors={errors}
    //       />
    //     );
    //   default:
    //     return <h1>ERROR 403 Forbidden</h1>
    // }
  }
}

export default RegistrationForm;
