import React, {Component} from 'react';
import axios from 'axios';
import {
    withRouter
  } from 'react-router-dom'
class Historylist extends Component {
  constructor(props) {
    console.log('in Dashboard!')
    super(props);
    this.state = {
       date:this.props.date,
       top:this.props.top
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
        <div className='historylist'>
        
           
        </div>
           
    
    )
  }
}

export default withRouter(Historylist);