import * as React from 'react';
import { render } from 'enzyme';
import { ImageThumbnail } from '../src/app/components';

describe('Test case for Image Thumbnail Component', () => {
    const props = { src: 'ranjith.jpg', title: 'Ranjith' };
    const wrapper = render(<ImageThumbnail {...props} />);

    it('Image Thumbnail component creation', () => {
        expect(wrapper.find('img')).toBeDefined();
    });
});
