import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import GoogleMap from './GoogleMap';

export class MapContainer extends Component {
  render() {

    const style = {
      width: '100vw',
      height: '100vh'
    }
    
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
  apiKey:'AIzaSyAR16pHLrvlKtUASrFXvWoz9NxLipqTwrM'
})(MapContainer)