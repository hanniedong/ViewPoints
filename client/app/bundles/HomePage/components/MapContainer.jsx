import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import GoogleMap from './GoogleMap';
import Marker from './Marker';

export class MapContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    const pos = {lat: 37.759703, lng: -122.428093}
    return (
      <div>
        <GoogleMap google={this.props.google} />
          <Marker />
          <Marker position={pos} />
        <GoogleMap />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey:'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(MapContainer)