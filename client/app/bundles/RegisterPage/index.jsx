import React, { Component } from 'react';
import App from '../App'

class RegisterPage extends Component {
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
 
export default class RegisterPageContainer extends Component {
  render() {
    return (
      <App>
        <RegisterPage />
      </App>
    );
  }
}