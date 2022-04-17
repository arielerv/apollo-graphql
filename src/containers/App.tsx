import React from 'react';

import {Header} from 'components';
import ProductList from 'pages/ProductList';

import {Container} from './styled';

const App = () => (
    <Container data-testid="container-app">
        <Header/>
        <ProductList/>
    </Container>
);

export default App;
