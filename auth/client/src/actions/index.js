import axios from 'axios';
import { browserHistory } from 'react-router';
import {
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR,
	FETCH_MESSAGE,
	ADD_TODO,
	SET_VISIBILITY_FILTER,
	TOGGLE_TODO
} from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
	return function (dispatch) {
		// Submit email/password to the our api server
		axios.post(`${ROOT_URL}/signin`, { email, password })
			.then(response => {
				// If request is good...
				// - Update state to indicate user is authenticated
				dispatch({ type: AUTH_USER });
				// - Save the JWT token
				localStorage.setItem('token', response.data.token);
				// - redirect to the '/feature'
				browserHistory.push('/feature');
			})
			.catch(() => {
				// If request is bad...
				// - Show an error to the user
				dispatch(authError('Bad Login Info'));
			});
	};
}

export function signupUser({ email, password }) {
	return function (dispatch) {
		axios.post(`${ROOT_URL}/signup`, { email, password })
			.then((response) => {
				dispatch({ type: AUTH_USER });
				localStorage.setItem('token', response.data.token);
				browserHistory.push('/feature');
			})
			.catch(response => dispatch(authError(response.data.error)));
	};
}

// export function signupUser({ email, password }) {
// 	return function(dispatch) {
// 		axios.post(`${ROOT_URL}/signup`, { email, password })
// 			.then(response => {
// 				dispatch({ type: AUTH_USER });
// 				localStorage.setItem('token', response.data.token);
// 				browserHistory.push('/feature');
// 			})
// 			.catch(serve => {
// 				dispatch(authError(serve.response.data.error));
// 			});
// 	};
// }

export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	};
}

export function signoutUser() {
	localStorage.removeItem('token');

	return {
		type: UNAUTH_USER
	};
}

export function fetchMessage() {
	return function (dispatch) {
		axios.get(ROOT_URL, {
			headers: { authorization: localStorage.getItem('token') }
		})
			.then((response) => {
				dispatch({
					type: FETCH_MESSAGE,
					payload: response.data.message
				});
			});
	};
}

let nextTodoId = 0;
export function addTodo(text) {
	return {
		type: ADD_TODO,
		id: nextTodoId++,
		text
	};
}

export function setVisibilityFilter(filter) {
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	};
}

export function toggleTodo(id) {
	return {
		type: TOGGLE_TODO,
		id
	};
}

