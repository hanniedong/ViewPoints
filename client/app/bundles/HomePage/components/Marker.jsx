// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom'
// import axios from 'axios';

// export default class Marker extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       postings: []
//     }
//     this.renderMarkers = this.renderMarkers.bind(this)
//   }

//   componentWillMount(){
//     var self = this
//     var url = 'http://localhost:3000/api/postings'
//     axios.get(url)
//     .then(function(response) {
//       self.setState({postings: response.data})
//     })
//     .catch(function(error) {
//       console.log(error);
//     })
//   }

//   componentDidUpdate(prevProps) {
//     if(this.props.google !== prevProps.google || this.props.position !== prevProps.position) {
//         this.renderMarker();
//     }
//   }

//   renderMarker() {
//     console.log("hi")
//     let { map, position, google, mapCenter } = this.props;

//     console.log(this.props)
//     let pos = position || mapCenter;
//     position = new google.maps.LatLng(pos.lat, pos.lng);

//     const pref = {
//       map: map,
//       position: position
//     };
//     this.marker = new google.maps.Marker(pref);
//   }

//     renderMarkers(){
//       let {
//        map, position, google, zoom, mapCenter
//       } = this.props;
//       let pos = position || mapCenter;
//       console.log(map)
    
//       for (var i = 0; i < this.state.postings.length; i++) {
//         position = new google.maps.LatLng(this.state.postings[i].latitude, this.state.postings[i].latitude);
//         let marker = new google.maps.Marker({
//           position: position,
//           map: map
//         });
//       }
//       // }


//       // var positions = []

//       // this.state.postings.map((post) => 
//       //   position = new google.maps.LatLng(post.latitude, post.longitude);
//       //   // // console.log(position)
//       //   // const pref = {
//       //   //   map: map,
//       //   //   position: position
//       //   // };
//         // this.marker = new google.maps.Marker(pref);
//     }

//   render() {
//     return null;
//   }
// }

// Marker.propTypes = {
//   position: PropTypes.object,
//   map: PropTypes.object
// }