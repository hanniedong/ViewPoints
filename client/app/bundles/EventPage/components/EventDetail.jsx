import React, { Component } from 'react';

export default class EventDetail extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const { id, address, image, name, url, location, date, start, end } = this.props
    const displayDate = new Date(date).toLocaleDateString('en-US',{ year: 'numeric', month: 'long', day: 'numeric' });
    const startDisplayTime = new Date(start).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric'});
    const endDisplayTime = new Date(end).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric'});

    return(
      <div className="event-detail_container">
        <div className = 'event-detail_card'>
          <img className = 'event-detail_image' src={image} alt=""/>
          <br></br>
          <div className = 'event-detail_detail'>
            <a className = 'event-detail_font link-size' href = {url}><h6> {name} </h6></a>
            <p className = 'event-detail_font'> {displayDate} </p>
            <p className = 'event-detail_font'> Start: {startDisplayTime} | End: { endDisplayTime} </p>
          </div>
        </div>
      </div>
    )
  }
}