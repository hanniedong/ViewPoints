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

  handleFormSubmit = (e) => {
    e.preventDefault()
    this.createPosting(this.state.name, this.state.description,this.state.latitude,this.state.longitude, this.state.photo)
  }

  createPosting(name, description, latitude, longitude, photo){
    var self = this;
    var url = 'http://localhost:3000/api/postings'
    axios.post(url, {
        name: name,
        description: description,
        latitude: latitude,
        longitude: longitude,
        user_id: 1,
        photo_content_type: photo.type,
        photo_file_name: photo.name,
        photo_file_size: photo.size,
        photo_updated_at: photo.lastModifiedDate
      })
    .then(function(response) {
      console.log(response)
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
    let file = e.target.files[0];
    this.setState({ photo: file});
  }


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
      <div className = "form-group">
        <input
          className= "form-group"
          name= "photo"
          type= "file"
          multiple={true}
          accept="image/*"
          onChange={this.handleImageChange.bind(this)}
        />
      </div>
        <button className="btn btn-default" type="submit">Submit</button>
      </form>
    </div>
    )
  }
}
export default PostingForm