import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import axios from 'axios';
class PostingForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      address: '',
      name: '',
      description: '',
      latitude:'',
      longitude: '',
      photo: ''
    }
  }

  buildFormData(){
    let name = this.state.name;
    let description = this.state.description;
    let latitude = this.state.latitude;
    let longitude = this.state.longitude;
    let photo = this.state.photo;
    let formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("longitude", longitude);
    formData.append("latitude", latitude);
    formData.append("photo", photo);

    return formData
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    this.createPosting()
  }

  createPosting(){
    var self = this;
    var url = 'http://localhost:3000/api/postings'
    axios.post(url, this.buildFormData())
    .then(function(response) {
      window.location="/hello_world";
    })
    .catch(function(error) {
      console.log(error);
    });
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

  handleImageChange(e) {
    var file = e.currentTarget.files[0];
    this.setState({photo: file})
  }


  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.locationOnChange,
      placeholder: 'View Location',
    }

  const cssClasses = {
    root: 'form-group',
    input: 'form-input',
    autocompleteContainer: 'my-autocomplete-container'
  }

  return (

    <div className = 'form' >
    <h3 className = 'form-font'> Add a View </h3>
      <form onSubmit={this.handleFormSubmit}>
      
      <div className="form-group">
        <input
            className = 'form-input'
            placeholder="View Title"
            name="name"
            type="string"
            onChange={this.handleInputChange}
          />
      </div>
      <div className="form-group">
        <input
          className = 'form-input'
          placeholder="View Description"
          name="description"
          type="text"
          onChange={this.handleInputChange}
        />
      </div>
      <div className="form-group">
        <PlacesAutocomplete classNames = {cssClasses} inputProps={inputProps} />
      </div>
      <div className = "form-group">
        <input
          className= "form-input-img"
          name= "photo"
          type= "file"
          multiple={true}
          accept="image/*"
          onChange={this.handleImageChange.bind(this)}
        />
      </div>
      <div className = 'btn-wrapper'>
        <button className="btn blue-btn" type="submit">Submit</button>
      </div>
      </form>
    </div>
    )
  }
}
export default PostingForm