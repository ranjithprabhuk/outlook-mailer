import * as React from 'react';
import { render } from 'enzyme';
import { MailCard } from '../src/app/components';

describe('Test case for Mail Card Component', () => {
    const props = {sender: 'Ranjithprabhu', content: 'Some dunmmu mail content'}
    const wrapper = render(<MailCard {...props} />);

    it('Mail card component creation', () => {
        expect(wrapper.find('div[class="mail-card"]')).toBeDefined();
    });

    it('renders the correct sender name', () => {
        expect(wrapper.find('h6')).toBeDefined();
        expect(wrapper.find('h6').text()).toEqual(props.sender);
    });

    it('renders the correct content', () => {
        expect(wrapper.find('p')).toBeDefined();
        expect(wrapper.find('p').text()).toEqual(props.content);
    });
});
