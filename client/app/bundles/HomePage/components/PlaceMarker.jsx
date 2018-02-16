import React, { Component } from 'react'
import { Marker } from 'react-google-maps'
import { ViewInfoWindow } from './ViewInfoWindow'
import axios from 'axios'

export class PlaceMarker extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
    this.state= {
      showTooltip: false
    }
  }

  clickTooltip(){
    this.setState({showTooltip: !this.state.showTooltip})
  }

  closeWindow(){
    this.setState({showTooltip: false})
  }

  render() {
    const {showTooltip} = this.state
    const {currentUser, lat, lng, name, description, id, likes, photo, poster} = this.props

    return(
      <Marker
        position={{
          lat: lat,
          lng: lng
        }}
        markerWithLabel={window.MarkerWithLabel}
        opacity={0}
        labelClass='map-likes-container'
        labelContent={`<div class="map-likes-marker"><span>${likes} likes</span></div>`}
        key ={`marker${id}`}
        onClick={this.clickTooltip.bind(this)}>
        {showTooltip && (
          <ViewInfoWindow 
            id={id}
            description={description}
            key={`info${id}`}
            name={name}
            likes = {likes}
            photo = {photo}
            poster = {poster}
            closeWindow={this.closeWindow.bind(this)}/>
        )}
        </Marker>
    );
  }
}
 
export default PlaceMarker