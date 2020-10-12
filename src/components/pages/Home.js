import React, { Component } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';

export default class Home extends Component {

	componentDidMount() {
		window.scrollTo(0, 0)
	}
	
	render() {
		return (
			<>
				<HeroSection />
			</>
			)
	}
}