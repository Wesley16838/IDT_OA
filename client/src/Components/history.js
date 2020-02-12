import React, {Component} from 'react';
import axios from 'axios';
import Historylist from './historyList'
import {
    withRouter
  } from 'react-router-dom'
class History extends Component {
  constructor(props) {
    console.log('in Dashboard!')
    super(props);
    this.state = {
       
    }
    
  }
  
  componentDidMount() {
    
  }
 
  handleChange = e => {
   
    this.setState({ip: e.target.value});
  };

  handleSubmit = async e => {
    try {
        alert('query');
        e.preventDefault(); 
       
        var result = await axios.post('')   
       
    }catch(e){
        alert('error: ' + e);
    }
  }
  render() {
    console.log("in history render!!!")
    return(
        <div className='container'>
        <h1>History</h1>
           <Historylist date="" top=""/>
        </div>
           
    
    )
  }
}

export default withRouter(History);