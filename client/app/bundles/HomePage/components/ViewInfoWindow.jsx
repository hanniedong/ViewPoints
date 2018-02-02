import React, { Component } from 'react'
import { InfoWindow } from 'react-google-maps'
import axios from 'axios'

export class ViewInfoWindow extends Component {

constructor(props){
  super(props)
  this.likePhoto = this.likePhoto.bind(this)
}

  likePhoto(user_id, posting_id){
    console.log(user_id)
    var self = this;
    var url = 'http://localhost:3000/likes'
    axios.post(url, { 
      user_id: user_id,
      posting_id: posting_id}
    )
    .then(function(response) {
      window.location.reload()
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  handleClick(){
    this.likePhoto(this.props.currentUser.id, this.props.id)
  }


  render() {
    const {user, id, description, poster, name, likes, photo} = this.props
    console.log(this.props)
  if(this.props != undefined ){
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
    )} else{
      return(null)
    }
  }
}
 
export default ViewInfoWindow