import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({
	children,
	type,
	onClick
}) => {
	return (
		<Link className='btn-mobile'>
			<button
				className="btn-style"
				onClick={onClick}
				type={type}
			>
				{children}
			</button>
		</Link>
	);
};