import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import TodoApp from './todos/TodoApp';

class Feature extends Component {
	componentWillMount() {
		this.props.fetchMessage();
	}

	render() {
		return (
			<div>
				{this.props.message}
				<TodoApp/>
			</div>
		);
	}
}

// export default Feature;

function mapStateToProps(state) {
	return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(Feature);
