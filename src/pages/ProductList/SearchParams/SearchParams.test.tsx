import React from 'react';
import {render, getByTestId} from '@testing-library/react';

import SearchParams from './index';

describe('<SearchParams>', () => {
    const onSearch = jest.fn();
    const getComponent = () => render(<SearchParams onSearch={onSearch}/>);

    it('should display a search input', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'search-input')).toBeInTheDocument();
    });
});
