import React from 'react';
import { shallow } from 'enzyme';

import SourcesList from '../components/SourcesList';

describe('SourcesList', () => {
	it('renders a list of sources', () => {
		const sources = [{
			name: 'BBC', 
			description: 'foobar',
		}];

		const wrapper = shallow(<SourcesList sources={sources} />);
		const html = wrapper.html();
		expect(html).toContain('BBC');
		expect(html).toContain('foobar');
	});
})