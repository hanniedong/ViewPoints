import React, { Component } from 'react'
import axios from 'axios'
import App from '../App'

class EventPage extends Component {

constructor(props){
  super(props)
  console.log(props)
}


  render() {
    const { currentUser } = this.props
    console.log(currentUser)
    return (
      <div>
        <h1> Events </h1>
      </div>
    );
  }
}

 
export default class PostingPageContainer extends Component {
  render() {
    return (
      <App>
        <PostingPage />
      </App>
    );
  }
}