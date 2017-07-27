import React from 'react';
import PropTypes from 'prop-types';
// import LinkToolbox from 'react-toolbox/lib/link';

const Link = ({ active, children, onClick }) => {
	if (active) {
		return <span>{children}</span>;
	}

	return(
		<a
			href="#"
			onClick={(e) => {
				e.preventDefault();
				onClick();
			}}
		>
			{children}
		</a>
	);
};

Link.propTypes = {
	active: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired
};

export default Link;
