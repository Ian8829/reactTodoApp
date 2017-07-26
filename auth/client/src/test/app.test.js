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

	it.x('contains list', () => {
		console.log(component.props());
		expect(component.find('li')).toContain('<Link />');
	});

});


