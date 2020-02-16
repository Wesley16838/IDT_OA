import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, {Component} from 'react';
const mapStyles = {
    width: '80%',
    height: '80%',
    };
class Googlemap extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
          lat : parseInt(this.props.lat),
          lng : parseInt(this.props.lng),
      }
    }
   
    render() {
  
      if(this.props.lat === '' && this.props.lng === ''){
        return (
          
            <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{  lat: 39.833851,
                lng: -74.871826}}
            center={{  lat: 39.833851,
                lng: -74.871826}} >
             <Marker position={{ lat: 39.833851, lng: -74.871826}} />
          </Map>
          
          
      );
      }else{
        return (
          
            <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{  lat: this.props.lat,
                lng: this.props.lng}}
                center={{  lat: this.props.lat,
                    lng: this.props.lng}}>
             <Marker position={{ lat: this.props.lat, lng: this.props.lng}} />
          </Map>
          
          
      );
      }
      
    }
  }
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyBmuVFyl548_WfKr2oqchbb4LgEiwHYjEU'
  })(Googlemap);