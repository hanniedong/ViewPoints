import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Marker extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    return null;
  }
}
Marker.propTypes = {
  position: PropTypes.object,
  map: PropTypes.object
}