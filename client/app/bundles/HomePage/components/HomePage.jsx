import React, { Component } from 'react';
import Header from './Header';
import Map from './Map';
 
class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Map />
      </div>
    );
  }
}
 
export default HomePage