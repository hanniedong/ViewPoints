import React, { Component } from 'react';
import Header from './Header';
import Map from './Map';
import 'bootstrap';
import PostingForm from './PostingForm'

class HomePage extends Component {

constructor(){
    super();
    this.state = {
      currentUser: null
    }
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }

componentDidMount(){
  let that = this
  axios.get('http://localhost:3000/api/postings',{
  })
  .then(function(response){
    if(response.data.email){
      that.setState({
        currentUser: response.data.email
      })
    } else {
      that.setState({
        currentUser: null
      })
    }
  })
  .catch(function(error){
    console.log(error);
  })
}

updateCurrentUser(email) {
    this.setState({
      currentUser: email
    })
  }

  render() {
    return (
    <div className = 'webpage-container'>
      <div className = 'container'>
        <Header />
        <div className = 'row'>
          <div className = 'col-md-8'>
            <Map />
          </div>
          <div className = 'col-md-4'>
            <PostingForm />
          </div>
        </div>
      </div>
    </div>
    );
  }
}
 
export default HomePage