import React from 'react';


import validate from './validateInfo';
import useForm from './useForm';

import './Form.css';

const FormSignup = ({ submitForm }) => {
	const { handleChange, handleSubmit, values, errors } = useForm(
		submitForm,
		validate
		);

	return (
		<div className="form-content-right">
			<form onSubmit={handleSubmit} className='form' noValidate>
				<h1>
					Want to work together? Let's get started by giving me a little context of what you're needing.
				</h1>
				<div className="form-inputs">
					<label htmlFor="" className="form-label">Name</label>
					<input
						type="text"
						className="form-input"
						name='name'
						placeholder='Enter your name...'
						value={values.name}
						onChange={handleChange}
					/>
					{errors.name && <p>{errors.name}</p>}
				</div>
				<div className="form-inputs">
					<label htmlFor="" className="form-label">Email</label>
					<input
						type="text"
						className="form-input"
						name='email'
						placeholder='Enter your email...'
						value={values.email}
						onChange={handleChange}
					/>
					{errors.email && <p>{errors.email}</p>}
				</div>
				<div className="form-inputs">
					<label htmlFor="" className="form-label">Org Type</label>
					<select className="form-input selector" name='type' value={values.type} onChange={handleChange} >
						<option defaultValue value="Business">Business</option>
						<option value="Church">Church</option>
						<option value="Nonprofit">Nonprofit</option>
					</select>
				</div>
				<div className="form-inputs">
					<label htmlFor="" className="form-label">How can I help?</label>
					<textarea
					className="form-input help-description" 
					name='help'
					placeholder='Enter how you need help...'
					value={values.help}
					onChange={handleChange}
					/>
					{errors.help && <p>{errors.help}</p>}
				</div>
				<button className="form-input-btn" type='submit'>
					Submit
				</button>
			</form>
		</div>
		)
};

export default FormSignup;