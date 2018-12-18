import React, { Component } from 'react';
import RegisterForm from '../../components/registerForm';

class RegisterScreen extends Component {
  render() {
    return <RegisterForm {...this.props} />;
  }
}

export default RegisterScreen;
