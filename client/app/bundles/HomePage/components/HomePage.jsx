import React, { Component } from 'react';
import Header from './Header';
import Map from './Map';
import 'bootstrap';
import PostingForm from './PostingForm'

class HomePage extends Component {
  render() {
    return (
      <div className = 'container'>
        <Header />
        <div className = 'row'>
          <div className = 'col-md-8'>
            <Map />
          </div>
          <div className = 'col-md-4'>
            <PostingForm />
          </div>

        </div>
      </div>
    );
  }
}
 
export default HomePage