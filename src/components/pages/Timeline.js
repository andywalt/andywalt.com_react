import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './timeline.css';

export default class Timeline extends Component {

	componentDidMount() {
		window.scrollTo(0, 0)
	}

	render() {
		return(
			<div className="timeline">
					<h3>Where I've Lived</h3>
				<div id="locations">
					<ol>
						<li>
							<div>
								<time>Born in</time> Louisiana
							</div>
						</li>
						<li>
							<div>
								<time>2000</time> Sri Lanka
							</div>
						</li>
						<li>
							<div>
								<time>2002</time> India
							</div>
						</li>
						<li>
							<div>
								<time>2003</time> Zachary, LA
							</div>
						</li>
						<li>
							<div>
								<time>2007</time> Colorado Springs, CO
							</div>
						</li>
						<li>
							<div>
								<time>2008</time> Baton Rouge, LA
							</div>
						</li>
						<li>
							<div>
								<time>2011</time> Austin, TX
							</div>
						</li>
						<li>
							<div>
								<time>2012</time> Birmingham, AL
							</div>
						</li>
						<li>
							<div>
								<time>2013</time> Gonzales, LA
							</div>
						</li>
						<li>
							<div>
								<time>2014</time> Liberty, MS
							</div>
						</li>
						<li>
							<div>
								<time>2015</time> Dallas, TX
							</div>
						</li>
						<li>
							<div>
								<time>2017</time> San Francisco, CA
							</div>
						</li>
						<li>
							<div>
								<time>Currently</time> Louisiana
							</div>
						</li>

					</ol>
				</div>

			{/* To be Styled */}
				<Link to="/">
				  <button className="home_button">AW</button> 
				</Link>
			</div>
		);
	}
}