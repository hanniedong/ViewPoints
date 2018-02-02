import React, { Component } from 'react';
import axios from 'axios';

export default class Button extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    return (
      <div className = 'btn-homepage'>
        <button className="btn-lg btn-style btn-warning" type="submit">{this.props.name}</button>
      </div>
    );
  }
}