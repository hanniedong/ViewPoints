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
    console.log(currentUser)

    if (currentUser)
      return (
        <div className = 'container'>
          <div className = 'row'>
            <div className = 'col-md-8'>
              <Map user = {currentUser} />
            </div>
            <div className = 'col-md-4 homepage_button'>
              <PostingForm user = {currentUser} />
                <a 
                  className="btn-lg homepage_link align-center" 
                  href= '/events'>
                  Wanderlust Events
                </a>
                <a 
                  className="btn-lg homepage_link align-center" 
                  href= '/logout' >
                  Logout
                </a> 
            </div>
          </div>
        </div>
      ) 
    else 
    return (
      <div className = 'container'>
        <div className = 'row'>
          <div className = 'col-md-8 homepage_map'>
            <Map />
          </div>
          <div className = 'col-md-2 homepage_button'>
            <a 
              className="btn-lg homepage_link" 
              href= '/events'>
              Wanderlust Events
            </a>
            <a 
              className="btn-lg homepage_link" 
              href= '/login'>
              Login
            </a>
            <a 
              className="btn-lg homepage_link" 
              href= '/users/new' >
              Register
            </a>

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