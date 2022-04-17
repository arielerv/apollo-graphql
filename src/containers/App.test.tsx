import React from 'react';
import {MockedProvider} from '@apollo/client/testing';
import {render, getByTestId} from '@testing-library/react';

import App from './App';

describe('<App>', () => {
    const getComponent = () => render(
        <MockedProvider mocks={[]} addTypename={false}>
            <App/>
        </MockedProvider>
    );

    it('should display App', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'container-app')).toBeInTheDocument();
    });
});
