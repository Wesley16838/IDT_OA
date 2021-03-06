import React, {Component} from 'react';
import { BrowserRouter as   Route, Link } from "react-router-dom"

class Header extends Component {
  constructor(props){
    super(props);
    
    this.state = {
     
    }
    
  }


  render() {
    
 
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
       
        <Link  className="navbar-brand" to='#'>IDT</Link> 
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">  
              <Link  className="nav-link" to='/'>Home</Link> 
            </li>
            <li className="nav-item">
              <Link  className="nav-link" to='/history'>History</Link> 
            </li>
          </ul>
         
        </div>
      </nav> 
     
    ) 
  }
}

export default Header;
