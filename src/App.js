import React from 'react';
import './App.css';
import NavComponent from './components/NavComponent';
import About from './components/About';
import Articles from './components/Articles';
import Article from './components/Article';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
   
    <Router>
      
    <div className="App">
      <NavComponent />
      <main>
        <Switch>
        <Route path="/about" component={About}/>
        <Route path="/articles" exact component={Articles}/>
        <Route path="/articles/:id" component={Article}/>
        </Switch>
      </main>
      
    </div>
  </Router>
);
  
}

export default App;
