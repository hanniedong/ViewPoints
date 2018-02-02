import React, { Component } from 'react'
import { InfoWindow } from 'react-google-maps'
import axios from 'axios'

export class ViewInfoWindow extends Component {

  likePhoto(){

  }
  render() {
    const {description, poster, name, likes, photo} = this.props
 
    return(
      <InfoWindow onCloseClick={this.props.closeWindow}>
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
          <p>Posted By: {poster.first_name}</p>
          <p>{likes} likes </p>
          <img
              width={250}
              src={photo}
              style={{ alignSelf: 'center' }}
            />
          <button onclick= {this.likePhoto().bind(this)}>
            Like Photo
          </button>
        </div>
      </InfoWindow>
    );
  }
}
 
export default ViewInfoWindow