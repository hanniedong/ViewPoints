import React, { Component } from 'react';
import App from '../App'

class LoginPage extends Component {

  render(){
    return(<h1> hi </h1>)
  }
}
 
export default class LoginPageContainer extends Component {
  render() {
    return (
      <App>
        <LoginPage />
      </App>
    );
  }
}