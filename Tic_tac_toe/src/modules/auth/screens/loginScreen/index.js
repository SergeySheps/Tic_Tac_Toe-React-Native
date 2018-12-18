import React, { Component } from 'react';
import LoginForm from '../../components/loginForm';

class LoginScreen extends Component {
  render() {
    return <LoginForm {...this.props} />;
  }
}

export default LoginScreen;
