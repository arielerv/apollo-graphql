import React from 'react';
import {render, getByTestId} from '@testing-library/react';

import placeholderImage from 'assets/placeholderImage.png';

import LazyImage from './index';

describe('<LazyImage>', () => {
    const props = {src: '', alt: ''};
    const getComponent = () => render(<LazyImage {...props}/>);

    describe('when `withSession` is defined', () => {
        beforeEach(() => {
            props.src = placeholderImage;
            props.alt = 'placeholder';
        });

        it('should display a lazy image', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'lazy-image')).toBeInTheDocument();
        });
    });
});
