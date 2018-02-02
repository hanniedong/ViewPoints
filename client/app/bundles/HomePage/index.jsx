import React, { Component } from 'react';
import Map from './components/Map';
import App from '../App'
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
              <Map user = {currentUser} />
            </div>
            <div className = 'col-md-4'>
              <PostingForm user = {currentUser} />
              <div className = 'align-center'>
                <a 
                  className="btn-lg link-style align-center" 
                  href= '/users/new' >
                  Logout
                </a>
              </div>
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
            <div className = 'align-center'>
            <a 
              className="btn-lg link-style" 
              href= '/login'>
              Login
            </a>
          </div> 
          <div className = 'align-center'>
            <a 
              className="btn-lg link-style align-center" 
              href= '/users/new' >
              Register
            </a>
          </div>

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