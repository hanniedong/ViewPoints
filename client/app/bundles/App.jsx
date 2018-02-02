import React, { Component } from 'react';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import Header from './HomePage/components/Header';
import 'bootstrap';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory  } from 'react-router-dom'

export default class App extends Component {

constructor(){
    super();
    this.state = {
      currentUser: null
    }
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }

componentDidMount(){
  let that = this
  axios.get('http://localhost:3000/api/auth',{
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
    <Router>
      <Route path="/hello_world" component={App} path="app" history={browserHistory}>
        <Route path="/login" component={LoginPage}/>
      </Route>
    </Router>

    const { currentUser } = this.props;


    return (
    <div className = 'webpage-container'>
      <Header />
      <HomePage />
    </div>

      )
  }
}
