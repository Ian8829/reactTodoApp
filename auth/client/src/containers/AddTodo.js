import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-toolbox/lib/button';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
	let input;

	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (!input.value.trim()) {
						return;
					}
					dispatch(addTodo(input.value));
					input.value = '';
				}}
			>
				<input
					ref={(node) => {
						input = node;
					}}
				/>
				<Button type="submit" accent>
          Add Todo
				</Button>
			</form>
		</div>
	);
};

AddTodo = connect()(AddTodo);

export default AddTodo;
