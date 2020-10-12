import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup.component';
import FormSuccess from './FormSuccess.component';

const Contact = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	function submitForm() {
		setIsSubmitted(true);
	}

	return (
		<>
			<div className="form-container">
				<div className="form-content-left">
					<img src="../images/Andy-coffee-shop.JPG" alt="Andy working in a coffee shop." className="form-img" />
				</div>
				{!isSubmitted ? (
					<FormSignup submitForm={submitForm} />
					) : (
					<FormSuccess />
				)}
			</div>
		</>
	);
};

export default Contact;