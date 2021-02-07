import React from 'react';
import Header from './ComponentsOfPage/Header'
import Home from './ComponentsOfPage/Home'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import About from './ComponentsOfPage/About';

function App() {
  return (
    <Router>
    <div className="App">
        <Header />
        <Switch>
        <Route path = "/" exact component={Home} />
        <Route path = "/about" component={About} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
