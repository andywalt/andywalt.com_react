import React from 'react';

import "./components/FontawesomeIcons/fontawesomelibrary.js";

import './App.css';

import './components/navbar.css';


import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Work from "./components/pages/Work";
import Skills from "./components/pages/Skills";
import Timeline from "./components/pages/Timeline";
import Footer from "./components/Footer.component";

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/work" exact component={Work} />
          <Route path="/skills" exact component={Skills} />
          <Route path="/timeline" exact component={Timeline} />
        </Switch>
        <Navbar />
        <Footer />
      </Router>
  );
}

export default App;
