import * as React from 'react';
import { render } from 'enzyme';
import { ButtonComponent } from '../src/app/components';

describe('Test case for Button Component', () => {
    const wrapper = render(<ButtonComponent text='New' value={5} />);

    it('button component creation', () => {
        expect(wrapper.find('button[type="button"]')).toBeDefined();
    });

    it('renders badge', () => {
        expect(wrapper.find('span')).toBeDefined();
    });

    it('renders badge with correct value', () => {
        expect(wrapper.find('span').text()).toEqual('5');
    });
});
