import React, { Component } from 'react'
import { InfoWindow } from 'react-google-maps'
 
export class ViewInfoWindow extends Component {
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
        </div>
      </InfoWindow>
    );
  }
}
 
export default ViewInfoWindow