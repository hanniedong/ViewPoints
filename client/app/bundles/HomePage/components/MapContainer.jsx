import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import GoogleMap from './GoogleMap';

export class MapContainer extends Component {

  constructor(props) {
    super(props);
    }

  render() {

    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <GoogleMap google={this.props.google} />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey:'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(MapContainer)