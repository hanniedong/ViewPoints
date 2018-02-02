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
    this.likePhoto(this.props.currentUser.id, this.state.post.id)
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
    console.log(currentUser)
    console.log(post)

  if (this.state.post != '' && currentUser != null){
    return(
      <div className = 'container'>
      <div className = 'row'>
        <div className = 'col-md-4'>
          <h1 className='font-color'>{post.name}</h1>
          <h4 className = 'font-color'> Posted by: {post.poster.first_name}</h4>
          <p className='font-color'>Description: {post.description}</p>
          <p className='font-color'>Likes: {post.likes.length}</p>
          <button 
            onClick = {this.handleClick.bind(this)} 
            className= 'btn-lg btn-warning'>
            Like photo
          </button>

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