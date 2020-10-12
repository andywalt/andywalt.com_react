import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import PortfolioCards from '../PortfolioCard.component';

import Contact from '../Contact.component';

import './portfolio.css';

export default class Portfolio extends Component {

  // Make Webpage go to top.
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="portfolio">
        <Link to="/">
          <button className="home_button">AW</button> 
        </Link>
        <h3 className="portfolio_title">Portfolio</h3>
        <div className="portfolio_subheader">
          <h1>Check out my previous work.</h1>
          <p className="portfolio_description"><i>Most of my work has been with Non-Profit Web Development. In addition to web, I'm developing iOS Applications.</i></p>
        </div>
        
        <PortfolioCards />

        <Contact />

        

      </div>
    );
  }
}