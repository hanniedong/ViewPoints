import React, { Component } from 'react';
import Header from './HomePage/components/Header';
import 'bootstrap';
import axios from 'axios';


const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
const api = axios.create({
    headers: {
      'X-CSRF-Token': token
    }
});

export default class App extends Component {

constructor(){
    super();
    this.state = {
      currentUser: null,
    }
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }

componentDidMount(){
  let that = this
  console.log(token)
  api.get('/api/sessions',{
  headers: {'X-CSRF-Token': token}
  })
  .then(function(response){
    if(response.data.email){
      that.setState({
        currentUser: response.data
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
    const { currentUser } = this.state;
    const modifiedChild = React.cloneElement(this.props.children, {
      currentUser
    });

    return (
    <div className = 'webpage-container'>
      <Header />
      {modifiedChild}
    </div>

    )
  }
}
