import React, { Component } from 'react'
import axios from 'axios'
import App from '../App'
import SearchBar from './components/SearchBar'
import EventList from './components/EventList'
import Header from '../HomePage/components/Header';

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
    console.log(this.state.events)
    const { events } = this.state.events;
    return (
      <div>
      <div className = 'eventpage_container'>
        <SearchBar 
          setEvents={(events) => {this.setState({events: events})}}
          clearEvents={() => {this.setState({events: []})}}
        />
        <EventList events = {events}/>
        <a
          href = '/'
          className= 'btn-lg homepage_link'>
          Back
        </a>
      </div>
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
