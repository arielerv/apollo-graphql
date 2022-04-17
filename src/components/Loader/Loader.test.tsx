import React from 'react';
import {render, getByTestId} from '@testing-library/react';

import Loader from './index';

describe('<Loader>', () => {
    const getComponent = () => render(<Loader/>);

    it('should display a loader', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'loading')).toBeInTheDocument();
    });
});
