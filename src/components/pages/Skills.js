import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './skills.css';

export default class Skills extends Component {

	componentDidMount() {
		window.scrollTo(0, 0)
	}

	render() {
		return(
			<div id="skills">
				<Link to="/">
				  <button className="home_button">AW</button> 
				</Link>
				<div className="skills_content">
					<h3 id="skills_title">Skills & Languages</h3>
					<div id="skills_groups">
						<div className="hard_skills">
							<h5>Hard Skills</h5>
							<ul>
								<li>Data-Driven Marketing</li>
								<li>Sales</li>
								<li>Public Speaking</li>
								<li>UX Design</li>
								<li>Operations</li>
								<li>Creative Writing</li>
								<li>Social Media</li>
								<li>Project LifeCycle Management</li>
							</ul>
						</div>
						<div className="soft_skills">
							<h5>Soft Skills</h5>
							<ul>
								<li>Creativity</li>
								<li>Collaboration</li>
								<li>Emotional Intelligence</li>
								<li>Critical Thinking</li>
								<li>Executive Presence</li>
								<li>Southern Hospitality</li>
								<li>Work Ethic</li>
								<li>Leadership</li>
							</ul>
						</div>
						<div className="technical_skills">
							<h5>Technical</h5>
							<ul>
								<li>Git</li>
								<li>React</li>
								<li>HTML</li>
								<li>CSS</li>
								<li>Javascript</li>
								<li>Swift</li>
								<li>SwiftUI</li>
								<li>Ruby</li>
								<li>Ruby on Rails</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}