import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import '../App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class HeroSection extends Component {
  render() {
    return (
      <div className="main_container">
        <div className="welcome_container">
          <div className="centered_text">
            <Link to="/about">
              <h1>Andy Walt</h1>
            </Link>
            <h4>Remarkable Experience Developer</h4>
            <div className="status_notifications">
              <div className="statuses">
                <p>Current Location:</p>
                <Link to="/about" className="current">Austin, Texas</Link>  
              </div>
              <div className="statuses">
                <p>Freelance Status:</p>
                <Link to="/about" className="current">Open for Work</Link>  
              </div>
              <div className="statuses">
                <p>Currently Snacking:</p>
                <a href="https://www.myregistry.com/wishlist/andy-walters-zachary-la/2446212/giftlist" target="_blank" rel="noopener noreferrer"> Voodoo Zapp's Chips</a>     
              </div>
            </div>

            <div className="social_icons">
              
              <div className="icon">
                <a href="https://twitter.com/andywalt" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon="fa-brands fa-x-twitter" size="3x" />
                </a>
              </div>
              <div className="icon">
                <a href="https://github.com/andywalt" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon="fa-brands fa-github" size="3x" />
                </a>
              </div>
              <div className="icon">
                <a href="https://www.linkedin.com/in/andywalt/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" size="3x" />
                </a>
              </div>
            </div>

            <FontAwesomeIcon icon="fa-solid fa-chevron-down" size="3x" className="down_arrow" />

          </div> 
        </div>
      </div>
      )
  }
};