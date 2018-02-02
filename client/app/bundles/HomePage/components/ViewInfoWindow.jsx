import React, { Component } from 'react'
import { InfoWindow } from 'react-google-maps'
import axios from 'axios'

export class ViewInfoWindow extends Component {

constructor(props){
  super(props)
}

  render() {
    const {user, id, description, poster, name, likes, photo} = this.props
 
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
          <br></br>
          <div>
            <a href = {`/postings/${id}`}>
              View Details
            </a>
          </div>
        </div>
      </InfoWindow>
    );
  }
}
 
export default ViewInfoWindow