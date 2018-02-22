import React, { Component } from 'react'
import axios from 'axios'
import App from '../App'
import SearchBar from './components/SearchBar'

class EventPage extends Component {

constructor(props){
  super(props)
  console.log(props)

  this.state = {
    events: [],
  };
}

  render() {
    const { currentUser } = this.props
    console.log(currentUser)
    return (
      <div>
        <SearchBar 
          setEvents={(events) => {this.setState({events: events})}}
          clearEvents={() => {this.setState({events: []})}}
        />
      </div>
    );
  }
}

 
export default class EventPageContainer extends Component {
  render() {
    return (
      <App>
        <EventPage />
      </App>
    );
  }
}