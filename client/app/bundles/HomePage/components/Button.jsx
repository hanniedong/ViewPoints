import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router'

export default class Button extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    return (
      <div className = 'btn-homepage'>
        <a 
          className="btn-lg link-style" 
          href= '/login' >
          {this.props.name}
        </a>
      </div>
    );
  }
}