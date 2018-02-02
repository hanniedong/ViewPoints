import React, { Component } from 'react';
import HomePage from './HomePage';
import 'bootstrap';
import axios from 'axios';

class App extends Component {

constructor(){
    super();
    this.state = {
      currentUser: null
    }
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }

componentDidMount(){
  let that = this
  axios.get('http://localhost:3000/api/users',{
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
    const { currentUser } = this.props;


    return (
    <div className = 'webpage-container'>
      <HomePage />
    </div>

      )
  }
}
 
export default App