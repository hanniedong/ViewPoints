import React, { Component } from 'react';
import { TOKEN } from './key';
import axios from 'axios';


export default class SearchBar extends Component {

  constructor(props) {
    super(props);
    console.log(props)
    this.state={
      city: ''
    }
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.clearEvents()
    const axiosCrossDomain = axios.create();
    delete axiosCrossDomain.defaults.headers.common['X-CSRF-Token']
    console.log(axiosCrossDomain.defaults.headers.common)
    axiosCrossDomain.get('https://www.eventbriteapi.com/v3/events/search/', {
      params: {
        token: TOKEN,
        categories: '109',
        'location.address': this.state.city,
        'q': 'hike',
      }
    })
    .then(response => {
      this.props.setEvents(response.data)
      axios.defaults.headers.common['X-CSRF-Token']
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  handleInputChange(event){
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  render(){

    return(
      <div className = 'searchbar' > 
        <form className = 'form-inline' onSubmit = {this.handleSubmit.bind(this)}>
          <input
            className = "form-control"
            name = "city"
            type = "search"
            placeholder = "Search by City"
            onChange = {this.handleInputChange.bind(this)}
          />
          <button 
            className = "btn btn-warning eventpage_button" 
            type= "submit"> Submit
          </button>
        </form>
      </div>
      )
  }
}