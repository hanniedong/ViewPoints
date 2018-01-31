import React, { Component } from 'react'
import { Marker } from 'react-google-maps'
import { ViewInfoWindow } from './ViewInfoWindow'
 
export class PlaceMarker extends Component {
  constructor(props){
    super(props)
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
    const {lat, lng, name, description, id, likes} = this.props
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
          <ViewInfoWindow description={description}
                          key={`info${id}`}
                           name={name}
                           closeWindow={this.closeWindow.bind(this)}/>
        )}
        </Marker>
    );
  }
}
 
export default PlaceMarker