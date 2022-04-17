import React from 'react';
import {render, getByTestId, getByText} from '@testing-library/react';

import ProductCard from './index';

describe('<ProductCard>', () => {
    const product = {
        productId: 1,
        productName: 'test_1',
        description: 'desc_1',
        currencyCode: '$',
        price: {value: 10},
        productAsset: {id: 1, preview: ''}
    };
    const getComponent = () => render(<ProductCard product={product}/>);

    it('should display a product', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'card-1')).toBeInTheDocument();
    });

    it('should display an image', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'lazy-image')).toBeInTheDocument();
    });

    it('should display a title', () => {
        const {container} = getComponent();
        expect(getByText(container, 'test_1')).toBeInTheDocument();
    });

    it('should display a description', () => {
        const {container} = getComponent();
        expect(getByText(container, 'desc_1')).toBeInTheDocument();
    });
});
