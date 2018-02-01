import React, { Component } from 'react';
import axios from 'axios';

export default class LoginButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = 'btn-wrapper'>
        <button className="btn-lg" type="submit">Submit</button>
      </div>
    );
  }
}