export default function validateInfo(values) {
	let errors = {};

	if (!values.name.trim()) {
		errors.name = 'Name Required.';
	}

	if (!values.email) {
		errors.email = 'Email Required';
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = "Email address is invalid."
	}

	if (!values.help.trim()) {
		errors.help = 'Tell me how I can help.';
	}

	return errors;
}