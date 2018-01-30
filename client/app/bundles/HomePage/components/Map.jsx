import React, { Component } from 'react'
import { withGoogleMap, GoogleMap } from 'react-google-maps'
import { PlaceMarker } from './PlaceMarker'

const ViewMap = withGoogleMap(props => (
  <GoogleMap
    ref = {props.onMapMounted}
    onZoomChanged = {props.handleMapChanged}
    onDragEnd= {props.handleMapChanged}
    onBoundsChanged = {props.handleMapFullyLoaded}
    defaultCenter={props.center}
    defaultZoom={props.zoom} 
  >
        {console.log(props)}
    {props.places.length > 0 && props.places.map(place =>(
      <PlaceMarker 
        lat={37.781555}
        lng= {-122.393990}
        name= {'Park'}
      />
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
    const place = <PlaceMarker lat={37.781555} lng={-122.393990} name={"Park"} />
    this.setState({ places: [place] })
  }
 
  getMapBounds() {
    var mapBounds = this.map.getBounds()
    var xMapBounds = mapBounds.b
    var yMapBounds = mapBounds.f
 
    this.xMapBounds.min = xMapBounds.b
    this.xMapBounds.max = xMapBounds.f
 
    this.yMapBounds.min = yMapBounds.f
    this.yMapBounds.max = yMapBounds.b
  }
 
  render() {
    const {lat, lng, places} = this.state;
    return(
      <div style={{width: `750px`, height: `750px`}}>
        <ul>
          <li>lng: {lng}</li>
          <li>lat: {lat}</li>
          <li>xMapBounds.min: {this.xMapBounds.min}</li>
          <li>xMapBounds.max: {this.xMapBounds.max}</li>
          <li>yMapBounds.min: {this.yMapBounds.min}</li>
          <li>yMapBounds.max: {this.yMapBounds.max}</li>
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