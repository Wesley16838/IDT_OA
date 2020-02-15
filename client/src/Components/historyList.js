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
       newlocations:this.props.locations,

       top:this.props.locations.length,
       newtop:'',
       
       err:null,
       date:'',
       datelocations:0
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
    var locations = this.state.locations//original 
    var newlocations = this.state.newlocations;//new location
    var num = this.state.locations.length;//original 
    var newnum = this.state.newtop;//Input num  
    var date = this.state.date;//date user input
    
    var new_locations = [];//tmp
    //Both Nothing
    if(date == '' && newnum==''){
      this.setState({newlocations:locations})
    }
    //if date is nothing
    if(date === ''){
     
      //if num > new location number
      if(newnum > this.state.locations.length){
        alert('Number must smaller than the number of element in the list!')
      }else{
        //if input is nothing
        if(newnum == ''){
          newnum = this.state.locations.length
        }
        for(var i = 0; i<newnum; i++){
          new_locations.push(locations[i])
        } 
        this.setState({newlocations:new_locations})
      }   
    }else{
        var arr = date.split('-')//user input
        var arr_next = []
        var arr_before = []
  
        if(this.state.newtop == ''){
          for(var j=0;j<num;j++){
            arr_before = locations[j].time.split('-')
            arr[1] = arr[1].replace('0','')
            if(arr[0] === arr_before[0] && arr[1] === arr_before[1] && arr[2] === arr_before[2]){
              arr_next.push(locations[j])
            }
          }
          this.setState({newlocations:arr_next})
        }else{
          for(var j=0;j<num;j++){
            arr_before = locations[j].time.split('-')
            arr[1] = arr[1].replace('0','')
            if(arr[0] === arr_before[0] && arr[1] === arr_before[1] && arr[2] === arr_before[2]){
              arr_next.push(locations[j])
            }
          }
          var datelength = arr_next.length
          if(newnum > datelength){
            alert('Number must smaller than the number of element in the list!');
           
          }else{
            var n = (arr_next.length-newnum)-1
            for(var k=n; k>=0;k--){
              arr_next.pop(newlocations[j])
            }
            this.setState({newlocations:arr_next, datelocations:datelength})
          }
         
        }
    }
  }
  render() {
   
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