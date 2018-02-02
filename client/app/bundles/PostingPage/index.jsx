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

  componentWillMount(){
    this.getPosting()
  }

  getPosting() {
    var self = this;
    axios.get('/api' + window.location.pathname)
    .then(function(response){
      self.setState({ post: response.data})
    }) 
  }

  render() {
    const { currentUser } = this.props
    const { post } = this.state 
    console.log(post)

  if (this.state.post != ''){
    return(
      <div className = 'container'>
      <div className = 'row'>
        <div className = 'col-md-4'>
          <h1 className='font-color'>{post.name}</h1>
          <h4 className = 'font-color'> Posted by: {post.poster.first_name}</h4>
          <p className='font-color'>Description: {post.description}</p>
        </div>
        <div className = 'col-md-8'>
          <img
              className = "img-fluid img-thumbnail float-right"
              src={post.photo}
              style={{ alignSelf: 'center' }}
            />
        </div>
      </div>
      </div>
    );
    }
  else
    return null
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