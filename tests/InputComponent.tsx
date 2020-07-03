import * as React from 'react';
import { render } from 'enzyme';
import { InputComponent } from '../src/app/components';

describe('Test case for Input Component', () => {
    let props = {
        type: 'text',
        meta: {
            touched: true,
            error: 'input is not valid',
        },
        label: 'input label',
    };
    let wrapper = render(<InputComponent {...props} />);

    it('component creation', () => {
        wrapper = render(<InputComponent {...props} />);
        expect(wrapper.find('input[type="text"]')).toBeDefined();
    });

    it('renders correct label', () => {
        wrapper = render(<InputComponent {...props} />);
        expect(wrapper.find('label')).toBeDefined();
        expect(wrapper.find('label').text()).toEqual(props.label);
    });

    it('renders error section', () => {
        wrapper = render(<InputComponent {...props} />);
        expect(wrapper.find('div[class="invalid-feedback"]')).toBeDefined();
    });

    it('renders correct error message', () => {
        wrapper = render(<InputComponent {...props} />);
        expect(wrapper.find('div[class="invalid-feedback"]').text()).toEqual(props.meta.error);
    });
});
