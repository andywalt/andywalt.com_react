import { useState, useEffect } from 'react';

import emailjs from 'emailjs-com';

function useForm(callback, validate) {
	const [values, setValues] = useState({
		name: '',
		email: '',
		type: '',
		help: ''
	});

	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = e => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value
		});
	};

	function handleSubmit(e) {
		e.preventDefault();

		setErrors(validate(values));
		setIsSubmitting(true);

	    emailjs.sendForm('service_6rkyn1d', 'template_waduw2o', e.target, 'user_IS3jbpZkALSpz2x1BuzhM')
	      .then((result) => {
	          console.log(result.text);
	      }, (error) => {
	          console.log(error.text);
	      });

	    e.target.reset()
	};

	useEffect(
		() => {
			if (Object.keys(errors).length === 0 && isSubmitting) {
				callback();
			}
		},
		[errors]
	);

	return { handleChange, handleSubmit, values, errors };
}

export default useForm;