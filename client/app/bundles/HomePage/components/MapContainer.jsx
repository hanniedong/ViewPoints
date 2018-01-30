import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import GoogleMap from './GoogleMap';

export class Container extends React.Component {
  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }
    return (
      <div style={style}>
        <GoogleMap google={this.props.google}
          />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey:'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(Container)