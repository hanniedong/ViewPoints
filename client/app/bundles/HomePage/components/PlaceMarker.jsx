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
    const {lat, lng, name, description, id} = this.props
    return(
      <Marker
        position={{
          lat: lat,
          lng: lng
        }}
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