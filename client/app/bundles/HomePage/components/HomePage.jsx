import React, { Component } from 'react';
import Header from './Header';
import MapContainer from './MapContainer';
import Form from './form';

export default class HomePage extends Component {
  render() {

    return (
      <div>
      <Header />
      <Form />
      <MapContainer />
      </div>
    );
  }
}
