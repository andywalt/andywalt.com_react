import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  

  render() {
    return (
      <div className="options_container">
          
          <span className="about_box box">
            <Link to="/about" className="nav-link">
              <h4>About</h4>
            </Link>
          </span>
          <span className="portfolio_box box">
            <Link to="/portfolio" className="nav-link">
              <h4>Portfolio</h4>
            </Link>
          </span>
          <span className="work_box box">
            <Link to="/work" className="nav-link">
              <h4>Work</h4>
            </Link>
          </span>
          
          <span className="skills_box box">
            <Link to="/skills" className="nav-link">
              <h4>Skills</h4>
            </Link>
          </span>
          <span className="locations_box box">
            <Link to="/timeline" className="nav-link">
              <h4>Timeline</h4>
            </Link>
          </span>
          <span className="home_box box" onClick={() => this.scrollToTop()}>
            <Link to="/" className="nav-link">
              <h4>Home</h4>
            </Link>
          </span>
      </div>
    );
  }
}