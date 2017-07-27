import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/app';

describe('<App />', () => {
	let component;

	beforeEach(() => {
		component = shallow(<App />);
	});

	it('renders 1 <App /> component test', () => {
		// console.log(component.props());
		expect(component).toHaveLength(1);
	});

	it('contains list', () => {
		// console.log(component.props());
		expect(component.find('li')).toContain('<Link />');
	});

	it('renders props', () => {
		const HelloWorld = <div>{this.props.children}</div>;
		let hello = shallow(<HelloWorld>Hello Node!</HelloWorld>);

		console.log('my hello props:', hello);
		expect(hello.props).toBeDefined();
	});
});

