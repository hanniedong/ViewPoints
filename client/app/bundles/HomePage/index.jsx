import React, { Component } from 'react';
import Map from './components/Map';
import App from '../App'
import Button from './components/Button';
import 'bootstrap';
import PostingForm from './components/PostingForm'

class HomePage extends Component {

  constructor(props){
    super(props)
  }

  render() {
    const { currentUser } = this.props

    if (currentUser)
      return (
        <div className = 'container'>
          <div className = 'row'>
            <div className = 'col-md-8'>
              <Map />
            </div>
            <div className = 'col-md-4'>
              <PostingForm />
            </div>

          </div>
        </div>
      ) 
    else 
    return (
      <div className = 'container'>
        <div className = 'row'>
          <div className = 'col-md-8'>
            <Map />
          </div>
          <div className = 'col-md-4'>
            <Button name = "Login" />
            <Button name = "Register" />
          </div>

        </div>
      </div>
    )
  }
}
 
export default class HomePageContainer extends Component {
  render() {
    return (
      <App>
        <HomePage />
      </App>
    );
  }
}