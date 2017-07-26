import React from 'react';
import { render } from 'enzyme';
import App from '../src/components/app';
import TestUtils from 'react-addons-test-utils';

describe.only('Basic app', () => {
	it('renders correctly', () => {
		const wrapper = render(<App/>);
		expect(wrapper.find('<Header />')).toBe('undefined');
	});
});

