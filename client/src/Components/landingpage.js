import React, {Component} from 'react';
import axios from 'axios';
import Googlemap from './googlemap'
import {
    withRouter
  } from 'react-router-dom'
class Dashboardpage extends Component {
  constructor(props) {

    super(props);
    this.state = {
        ip:'',
        latitude:'',
        longitude:'',
        mobile:''
    }
    
  }
  
  componentDidMount() {
    
  }
 
  handleChange = e => {
     
       
      
    this.setState({ip: e.target.value});
  };
  handleChangemobile = e => {
 
    this.setState({mobile: e.target.value.replace(/\D/,'')});
  };

  handleSubmit = async e => {
    try {

        
        e.preventDefault(); 
        let { ip,mobile } = this.state;
        console.log('state,',this.state)
        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip) && mobile.length === 10) { 
            
            var info = await axios.get('https://api.ipgeolocation.io/ipgeo?apiKey=e53d709ac76741288e7508c734e53785&ip='+ip)
            
            var result = await axios.post('/location',{
                ip: ip,
                latitude: info.data.latitude,
                longitude: info.data.longitude,
                mobile:mobile
              })   
            this.setState({latitude:result.data.location.latitude, longitude:result.data.location.longitude})

        }else{
            alert("You have entered an invalid IP address or phone number!")  
        }
  
    }catch(e){
        console.log('error: ' + e);
    }
  }
  render() {
    console.log("in landingpage render!!!")
    return(
        <div className='container'>
        
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <div className="form-group row">
                    <label htmlFor="ip">Ip address</label>
                    <input type="text" className="form-control" id="ip" aria-describedby="ipHelp" name="ip" value={this.state.ip} onChange={this.handleChange}/>
                    <small id="ipHelp" className="form-text text-muted">Input ip address.</small>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="mobile">Phone Number</label>
                    <input type="text" className="form-control" id="mobile" aria-describedby="mobileHelp" name="mobile" value={this.state.mobile} onChange={this.handleChangemobile} placeholder="EX:2063345306"/>
                    <small id="mobileHelp" className="form-text text-muted">Input mobile to get message about information of location(Only allow U.S. User).</small>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className="location">
                <p>latitude: {this.state.latitude}</p> 
                <p>longitude: {this.state.longitude}</p>
            </div>
            <Googlemap lat={this.state.latitude} lng={this.state.longitude}/>
        </div>
           
    
    )
  }
}

export default withRouter(Dashboardpage);