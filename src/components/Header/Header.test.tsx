import React from 'react';
import {render, getByTestId} from '@testing-library/react';

import Header from './index';

describe('<Header>', () => {
    const getComponent = () => render(<Header/>);

    it('should display a header logo', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'logo-image')).toBeInTheDocument();
    });
});
