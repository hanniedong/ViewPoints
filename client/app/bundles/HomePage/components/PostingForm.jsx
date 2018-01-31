import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

class PostingForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      address: 'San Francisco, CA',
      name: '',
      description: ''
    }
    this.onChange = (address) => this.setState({ address })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }

  handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

  return (

    <div >
    <h3> Add a View </h3>
      <form onSubmit={this.handleFormSubmit}>
      
      <div className="form-group">
        <input
            className = 'form-control'
            placeholder="View Title"
            name="name"
            type="string"
            onChange={this.handleInputChange}
          />
      </div>
      <div className="form-group">
        <input
          className = 'form-control'
          placeholder="View Description"
          name="description"
          type="text"
          onChange={this.handleInputChange}
        />
      </div>
      <div className="form-group">
        <PlacesAutocomplete className = 'form-control' inputProps={inputProps} />
      </div>
        <button className="btn btn-default" type="submit">Submit</button>
      </form>
    </div>
    )
  }
}
export default PostingForm