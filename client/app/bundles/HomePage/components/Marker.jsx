import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class Marker extends Component {
  constructor(props) {
    super(props);
    this.state ={
      locations: []
    }
  }

  componentWillMount(){
    var self = this
    var url = 'http://localhost:3000/api/postings'
    axios.get(url)
    .then(function(response) {
      this.setState({locations: response.data})
    })
    .catch(function(error) {
      console.log(error);
    })
  }
  
  componentDidUpdate(prevProps) {
    if ((this.props.map !== prevProps.map) ||
      (this.props.position !== prevProps.position)) {
        this.renderMarker();
    }
  }
    renderMarker() {
      let {
        map, google, position, mapCenter
      } = this.props;

      let pos = position || mapCenter;
      position = new google.maps.LatLng(pos.lat, pos.lng);

      const pref = {
        map: map,
        position: position
      };
      this.marker = new google.maps.Marker(pref);
  }

  render() {
    return null;
  }
}

Marker.propTypes = {
  position: PropTypes.object,
  map: PropTypes.object
}