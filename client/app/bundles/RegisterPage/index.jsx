import React, { Component } from 'react';
import App from '../App';
import axios from 'axios';


const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
const api = axios.create({
    headers: {
      'X-CSRF-Token': token
    }
});


class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
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

  createUser(firstName, lastName, email, password){
    api.post("/api/users", {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password
      })
    .then(function(response) {
      window.location="/";
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.createUser(
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.password
    );
  };

  render() {
    return (
      <div className = 'form-container'>
        <h1 className = 'font-color'> Register </h1>
        <form onSubmit={this.handleSubmit}>
        <div className = 'form-group'>
            <input
              className = 'form-control input-lg'
              placeholder="first name"
              name="firstName"
              type="string"
              onChange={this.handleInputChange}
            />

        </div>
        <div className = 'form-group'>
            <input
              className = 'form-control input-lg'
              placeholder="last name"
              name="lastName"
              type="string"
              onChange={this.handleInputChange}
            />

        </div>
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
 
export default class RegisterPageContainer extends Component {
  render() {
    return (
      <App>
        <RegisterPage />
      </App>
    );
  }
}