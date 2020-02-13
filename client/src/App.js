import React from 'react';
import Landingpage from './Components/landingpage';
import Historypage from './Components/history';
import Header from './Components/header';
import './App.css';
import './Assets/css/styles.min.css'//css file
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import MetaTags from 'react-meta-tags';
function App() {
  return (
  <Router>
    <div className="App">
    <MetaTags>
       <title>Idt-oa</title>
       <meta name="description" content="Idt-oa" />
       <meta property="og:title" content="Idt-oa" />
    </MetaTags>
    <Header/>
     <Switch>
       <Route exact path="/" render={(props) => <Landingpage {...props} title="Landinpage"/>}/>
       <Route exact path="/history" render={(props) => <Historypage {...props} title="History"/>}/>
     </Switch>

 </div>
 </Router>    
  );
}

export default App;
