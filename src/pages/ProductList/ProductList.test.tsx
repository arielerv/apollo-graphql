import React from 'react';
import {MockedProvider} from '@apollo/client/testing';
import {render, waitFor, queryByTestId, queryByText} from '@testing-library/react';

import ProductList from 'pages/ProductList';
import {mockProducts} from 'constant';

describe('<ProductList>', () => {
    const getComponent = () => render(
        <MockedProvider mocks={mockProducts} addTypename={false}>
            <ProductList/>
        </MockedProvider>,
    );

    it('should render a loading',  () => {
        const {container} = getComponent();
        expect(queryByTestId(container, 'loading')).toBeInTheDocument();
    });

    it('should render a total message', async () => {
        const {container} = getComponent();
        await waitFor(() => {
            expect(queryByText(container, '2 products were found')).toBeInTheDocument();
        });
    });

    it('should render a array of products ', async () => {
        const {container} = getComponent();
        await waitFor(() => {
            mockProducts[0].result.data.products.items.forEach(product => {
                expect(queryByTestId(container, `card-${product.id}`)).toBeInTheDocument();
            });
        });
    });
});
