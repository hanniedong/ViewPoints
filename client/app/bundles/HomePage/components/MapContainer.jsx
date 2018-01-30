import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import GoogleMap from './GoogleMap';
import Marker from './Marker';

export class Container extends React.Component {

  render() {
    const style = {
      width: '100%',
      height: '100%'
    } 
    const pos = {lat: 37.759703, lng: -122.428093}
    return (
      <div style={style}>
        <GoogleMap google={this.props.google}>
          <Marker />
          <Marker position={pos} />
        </GoogleMap>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey:'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(Container)