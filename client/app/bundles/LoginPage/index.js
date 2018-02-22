import React, { Component } from 'react';
import App from '../App'
import axios from 'axios'

const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
const api = axios.create({
    headers: {
      'X-CSRF-Token': token
    }
});

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    });
  }

  loginUser = (email, password) => {
    api.post("/api/sessions", {
      email: email,
      password: password
    })
    .then(function(response) {
      console.log(response)
      window.location = "/";
    })
    .catch(function(error) {
      console.log(error);
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.loginUser(this.state.email, this.state.password);
  };

  render() {
    return (
      <div className = 'form-container'>
        <h1 className = 'font-color'> Login </h1>
        <form onSubmit={this.handleSubmit}>
        <div className = 'form-group'>
            <input
              className = 'form-control input-lg'
              placeholder="email"
              name="email"
              type="string"
              onChange={this.handleInputChange}
            />

        </div>
        <div className = 'form-group'>
          <input
            className = 'form-control input-lg'
            placeholder="password"
            name="password"
            type="password"
            onChange={this.handleInputChange}
          />

        </div>
        <div className = 'form-group'>
          <button 
            className = 'btn-lg btn-style' 
            type="submit"> Login 
          </button>
        </div>
        </form>
      </div>
    );
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