import React, { Component } from 'react'
import axios from 'axios'
import App from '../App'

class PostingPage extends Component {

constructor(props){
  super(props)
  console.log(props)

  this.state = {
    post: ""
  }

  this.likePhoto = this.likePhoto.bind(this)
}

  likePhoto(user, photo_id){
    var self = this;
    var url = 'http://localhost:3000/api/likes'
    axios.post(url,{ photo_id: photo_id})
    .then(function(response) {
      window.location="/";
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  componentDidMount(){
    this.getPosting()
  }

  getPosting() {
    var self = this;
    axios.get('/api' + window.location.pathname)
    .then(function(response){
      console.log(response)
      // self.setState({ post: response.data})
    }) 
  }

  render() {
    const { currentUser } = this.props
 
    return(
        <div>
          <h1>hi</h1>
        </div>
    );
  }
}
 
 
export default class PostingPageContainer extends Component {
  render() {
    return (
      <App>
        <PostingPage />
      </App>
    );
  }
}