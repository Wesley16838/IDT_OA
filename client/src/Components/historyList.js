import React, {Component} from 'react';
// import axios from 'axios';
import {
    withRouter
  } from 'react-router-dom'
class Historylist extends Component {
  constructor(props) {
   
    super(props);
   
    this.state = {
       locations:this.props.locations.reverse(),
       top:this.props.locations.length,
       err:null,
       newlocations:this.props.locations,
       newtop:this.props.locations.length,
       date:''
    }
    
  }
  
  top = e =>{
    var num = e.target.value;    
    this.setState({newtop:num}) 
  }
 
  date = e =>{
    var date = e.target.value;
    this.setState({date:date}) 
  }
  submit = e =>{
    e.preventDefault();
    var locations = this.state.locations
    var num = this.state.newtop;//3
    var date = this.state.date;//2020-02-13
    var new_locations = [];
    console.log('in submit')
    if(date === ''){
      console.log('date nothing')
      
      if(num > this.state.top){
        alert('Number must smaller than the number of element in the list!')
      }else{
        
        for(var i = 0; i<num; i++){
          new_locations.push(locations[i])
        } 
        this.setState({newlocations:new_locations})
      }
        
    }else{
      console.log('date has something')
      if(num > this.state.top){
        alert('Number must smaller than the number of element in the list!')
      }else{
        var arr = date.split('-')//user input
        console.log('arr user input,',arr)
        var arr_next = []
        var arr_before = []
        for(var j=0;j<this.state.newtop;j++){
          arr_before = locations[j].time.split('-')
          console.log('arr_before,',arr_before)
          arr[1] = arr[1].replace('0','')
          if(arr[0] === arr_before[0] && arr[1] === arr_before[1] && arr[2] === arr_before[2]){
            console.log('all equal')
            arr_next.push(locations[j])
          }
        }
        this.setState({newlocations:arr_next})
      }
    }
    
  }
  render() {
    console.log("in historylist render!!!")
    console.log(this.state.newlocations)
    // console.log('date from server,',this.state.locations[0].time)//Wed Feb 12 2020 14:10:16 GMT-0500 (Eastern Standard Time)
    // console.log('date from client,',this.state.date)
   
    var section = null;
     
    section = this.state.newlocations && this.state.newlocations.map((next,i) => {
      return (
        <li key={i}>
          {i+1}. Ip Address: {next.ip} - Date: {next.time}
        </li>
        )
    })
    return(
        <div className='historylist'>
         
          <form className="filtertop" onSubmit={this.submit}>
            <div className="filter">
                <input type="number" id="top" onChange={this.top} placeholder="Search for top N..."></input>
                <p className='error'>{this.state.errtop}</p>
            </div>
            <div className="filter">
                <input type="date" id="date" onChange={this.date} placeholder="Search for date..."></input>
                <p className='error'>{this.state.errdate}</p>
            </div>
            <button type="submit" className="btn btn-primary">Search</button>
          </form>
          <ol>
          {section} 
          </ol>
          
        </div>
           
    
    )
  }
}

export default withRouter(Historylist);