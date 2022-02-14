import React from 'react';

import './App.css';
import NavComponent from './components/NavComponent';
import About from './components/About';
import Articles from './components/Articles';
import Article from './components/Article';
import Blogs from './components/Blogs';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import backgroundVideo from './video/space.mp4';

function App() {

  return (
   <div>
     
    <Router>
      
    <div className="App">
      <NavComponent 
      />
      <main>
        <Switch>
        <Route path="/" exact component={Articles}/>
        <Route path="/about" component={About}/>
        <Route path="/articles" exact component={Articles}/>
        <Route path="/articles/:id" component={Article}/>
        <Route path="/blogs" exact component={Blogs}/>
        </Switch>
      </main>
    
    </div>
  </Router>
  
  <video autoPlay="autoplay" loop muted  
    style={{
      position: "fixed",
      width: "100%",
      left: "50%",
      top: "50%",
      height: "100%",
      objectFit: "cover",
      transform: "translate(-50%, -50%)",
      zIndex: "-1"
    }}
  >
     <source src={backgroundVideo} type='video/mp4'/> 
      </video>
      
</div>
);
  
}

export default App;
