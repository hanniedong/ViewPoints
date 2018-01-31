import React, { Component } from 'react';
import Header from './Header';
import Map from './Map';
import 'bootstrap';

class HomePage extends Component {
  render() {
    return (
      <div className = 'container'>
        <Header />
        <Map />
      </div>
    );
  }
}
 
export default HomePage