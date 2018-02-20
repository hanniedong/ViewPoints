import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router'

export default class Button extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    const { name } = this.props
    const url = `/${name}`
    return (
      <div className = 'btn-homepage'>
        <a 
          className="btn-lg link-style" 
          href= {url} >
          {this.props.name}
        </a>
      </div>
    );
  }
}