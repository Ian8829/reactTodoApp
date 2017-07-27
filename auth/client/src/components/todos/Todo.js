import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from 'react-toolbox/lib/list';

const Todo = ({ onClick, completed, text }) => (
	<List selectable ripple>
		<ListItem
			onClick={onClick}
			style={{
				color: completed ? 'red' : 'none'
			}}
			caption={text}
			avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
		>
		</ListItem>
	</List>
);

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
};

export default Todo;
