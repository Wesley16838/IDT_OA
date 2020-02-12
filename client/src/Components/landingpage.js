import React, {Component} from 'react';
import axios from 'axios';
import {
    withRouter
  } from 'react-router-dom'
class Dashboardpage extends Component {
  constructor(props) {
    console.log('in Dashboard!')
    super(props);
    this.state = {
        ip:'',
        location:''
    }
    
  }
  
  componentDidMount() {
    
  }
 
  handleChange = e => {
   
    this.setState({ip: e.target.value});
  };

  handleSubmit = async e => {
    try {
        alert('A name was submitted: ' + this.state.ip);
        e.preventDefault(); 
        let { ip } = this.state;
        var result = await axios.post('/location/'+ip)   
        console.log('result,',result)
        this.setState({location:result})
    }catch(e){
        alert('error: ' + e);
    }
  }
  render() {
    console.log("in landingpage render!!!")
    return(
        <div className='container'>
        
            <form onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="ip">Ip address</label>
                    <input type="text" className="form-control" id="ip" aria-describedby="ipHelp" name="ip" value={this.state.ip} onChange={this.handleChange}/>
                    <small id="ipHelp" className="form-text text-muted">Input Ip to get your current location.</small>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className="location">
                <p></p>
            </div>
        </div>
           
    
    )
  }
}

export default withRouter(Dashboardpage);