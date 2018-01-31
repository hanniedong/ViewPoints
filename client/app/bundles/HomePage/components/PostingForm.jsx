import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

class PostingForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      address: '',
      name: '',
      description: '',
      latitude:'',
      longitude: '',
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    this.createPosting({
      name: this.state.name, 
      description: this.state.description,
      latitude: this.state.latitude,
      longitude: this.state.longitude
    })
  }

  createPosting(name, description, latitude, longitude){
    console.log(name, description, latitude, longitude)
  }

  handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    });
  }

  locationOnChange = (address) => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({ latitude: latLng.lat, longitude: latLng.lng}))
      .catch(error => console.error('Error', error))
    this.setState({ address });
  };


  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.locationOnChange,
      placeholder: 'View Location',
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