import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {

  render() {
    return (
      <div className="footer">
			<footer className="footer_container">
				<div className="copyright">
					<p>Made with Coffee & Care<br />
					<small>&copy; Copyright 2020, Andy Walters</small></p>
				</div>
				<div className="more_info">
					<p><span className="footer_title">More</span>
					<br />
					<Link to="/about" className="">FAQ</Link>
					<br />
					<Link to="/about" className="">Stack</Link>
					</p>
				</div>
				<div className="social_links">
					<ul>
						<li><span className="footer_title">Let's Be Friends</span></li>
						<li><a href="https://twitter.com/andywalt" target="_blank" rel="noopener noreferrer">Twitter</a></li>
						<li><a href="https://instagram.com/andywalt" target="_blank" rel="noopener noreferrer">Instagram</a></li>
						<li><a href="https://www.twitch.tv/napcrusader" target="_blank" rel="noopener noreferrer">Twitch</a></li>
					</ul>
				</div>
			  
			</footer>
			
		</div>
    );
  }
}