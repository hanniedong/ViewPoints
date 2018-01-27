import React, { Component } from 'react';
import Header from './Header'
import MapContainer from './MapContainer'

export default class HomePage extends Component {
  render() {

    return (
      <div>
      <Header />
      <MapContainer />
      </div>
    );
  }
}
