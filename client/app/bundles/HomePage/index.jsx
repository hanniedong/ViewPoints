import React, { Component } from 'react';
import Header from './components/Header';
import Map from './components/Map';
import 'bootstrap';
import PostingForm from './components/PostingForm'

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