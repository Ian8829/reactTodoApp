import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/app';

describe('<App />', () => {
  it('renders 1 <App /> component test', () => {
		const component = shallow(<App />);
		// console.log(component.props());
		expect(component).toHaveLength(1);
	});

  describe('it renders props correctly', () => {
  	const component = shallow(<App name="app" />);
  	expect(component.instance().props.name).toBe('app');
	});

});


