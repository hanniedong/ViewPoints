import React, { Component } from 'react'
import { withGoogleMap, GoogleMap } from 'react-google-maps'
import { PlaceMarker } from './PlaceMarker'
import axios from 'axios'

const ViewMap = withGoogleMap(props => (
  <GoogleMap
    ref = {props.onMapMounted}
    onZoomChanged = {props.handleMapChanged}
    onDragEnd= {props.handleMapChanged}
    onBoundsChanged = {props.handleMapFullyLoaded}
    defaultCenter={props.center}
    defaultZoom={props.zoom} 
  >
    {props.places.length > 0 && props.places.map(place =>(
        <PlaceMarker key={`place${place.id}`}
                     id={place.id}
                     lat={place.latitude}
                     lng={place.longitude}
                     description={place.description}
                     name={place.name}
                     likes = {place.likes} />
    ))}
  </GoogleMap>
));
 
export default class Map extends Component {
  constructor(props) {
    super(props)
 
    this.zoom = 13
    this.xMapBounds = {min: null, max: null}
    this.yMapBounds = {min: null, max: null}
    this.mapFullyLoaded = false

    this.state = {
      places: [],
      lat: 37.781555,
      lng: -122.393990
    };
  }

  handleMapChanged() {
    this.getMapBounds()
    this.setMapCenterPoint()
    this.fetchPlacesFromApi()
  }
 
   handleMapMounted(map) {
    this.map = map
  }

  handleMapFullyLoaded() {
    if (this.mapFullyLoaded)
      return
 
    this.mapFullyLoaded = true
    this.handleMapChanged()
  }

  setMapCenterPoint() {
    this.setState({
      lat: this.map.getCenter().lat(),
      lng: this.map.getCenter().lng()
    })
  }

  fetchPlacesFromApi() {
    var self = this;
    var url = `http://localhost:3000/api/postings?min_lng=${this.xMapBounds.min}&max_lng=${this.xMapBounds.max}&min_lat=${this.yMapBounds.min}&max_lat=${this.yMapBounds.max}`
    var all_url = 'http://localhost:3000/api/postings'
    axios.get(url) 
    .then(function(response){
      self.setState({ places: response.data})
    }) 
  }
 
  getMapBounds() {
    var mapBounds = this.map.getBounds()
    var xMapBounds = mapBounds.b
    var yMapBounds = mapBounds.f
 
    this.xMapBounds.min = xMapBounds.b
    this.xMapBounds.max = xMapBounds.f
 
    this.yMapBounds.min = yMapBounds.b
    this.yMapBounds.max = yMapBounds.f
  }
 
  render() {
    const {lat, lng, places} = this.state;
    console.log(this.state)
    return(
      <div style={{width: `500px`, height: `500px`}}>
        <ul>
          <li>lng: {lng}</li>
          <li>lat: {lat}</li>
        </ul>
        <ViewMap
          onMapMounted={this.handleMapMounted.bind(this)}
          handleMapChanged={this.handleMapChanged.bind(this)}
          handleMapFullyLoaded={this.handleMapFullyLoaded.bind(this)}
          center={{
            lat: lat,
            lng: lng
          }}
          places={places}
          zoom={this.zoom}
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
        />
      </div>
    );
  }
}