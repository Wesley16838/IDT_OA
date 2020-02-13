import React, {Component} from 'react';
import axios from 'axios';
import Historylist from './historyList'
import {
    withRouter
  } from 'react-router-dom'
class History extends Component {
  constructor(props) {
   
    super(props);
    this.state = {
       location:[],
       loading:false
    }
    
  }
  
    componentDidMount(){
     
      // var info = await axios.get('/history')
      axios.get('/history').then(info=>{
   
        this.setState({location:info.data.location, loading:true})
      })
     
      
  }
 
  handleChange = e => {
   
    this.setState({ip: e.target.value});
  };

  handleSubmit = async e => {
    try {
        alert('query');
        e.preventDefault(); 
       
       
    }catch(e){
        alert('error: ' + e);
    }
  }
  render() {

    if(this.state.loading === false){
     
      return(
      
        <h1>Loading</h1>
         )
    }else{
    
      return(
        <div className='container'>
        <h1>History</h1>
           <Historylist locations={this.state.location}/>
        </div>
    )
    }
    
  }
}

export default withRouter(History);