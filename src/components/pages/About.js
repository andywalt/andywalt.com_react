import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './about.css';

export default class About extends Component {

  // Make Webpage go to top.
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div id="about">
        <div className="about_container">
          <img className="headshot" src="./images/AndyHeadshot.jpg" alt="Andy Face" />
          <div className="about_content">
            <h3 className="about_me_title">About Andy</h3>
            <p>Hi, I'm Andy. Nice to meet you! <br />
            I'm a relational problem solver that has lived all over the world. I enjoy epic stories, anecdotal humor, &amp; magical experiences. <br />
            I'm a self-taught web developer with a background in communications, marketing, and non-profits. I'm a "figure it out" go-getter that values wisdom, sustainability, and leaving people better than I found them &#40;with both food and business&#41;. <br />
            This website has information on who I am and what I can do. It's not all-inclusive, so if there is anything you would love to know, feel free to ask!
            </p>
          </div>

          
        </div>
        <div>
          <Link to="/">
            <button className="home_button">AW</button> 
          </Link>
        </div>
      </div>
    );
  }
}