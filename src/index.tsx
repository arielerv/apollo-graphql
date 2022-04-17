import {StrictMode} from 'react';
import * as ReactDOMClient from 'react-dom/client';
import {ApolloClient, ApolloLink, createHttpLink, InMemoryCache} from '@apollo/client';
import {ApolloProvider} from '@apollo/client/react';

import {GlobalStyle} from 'styled';

import App from './containers/App';
import reportWebVitals from './containers/reportWebVitals';

const commerceLink = createHttpLink({
    uri: 'https://shrouded-wave-86340.herokuapp.com/shop-api',
    headers: {
        authorization: localStorage.getItem('Auth-Token')
            ? `Bearer ${localStorage.getItem('Auth-Token')}`
            : ''
    }
});

const userLink = createHttpLink({
    uri: 'https://json-placeholder-graphql.herokuapp.com/graphql'
});

const afterwareLink = new ApolloLink((operation, forward) => forward(operation).map(response => {
    const context = operation.getContext();
    const authHeader = context.response.headers.get('Vendure-Auth-Token');

    if (authHeader) {
        localStorage.setItem('Auth-Token', authHeader);
    }
    return response;
}));

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([
        afterwareLink,
        ApolloLink.split(
            operation => operation.getContext().service === 'user',
            userLink,
            commerceLink
        )
    ])
});

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const root = ReactDOMClient.createRoot(container);

root.render(
    <StrictMode>
        <ApolloProvider client={client}>
            <GlobalStyle/>
            <App/>
        </ApolloProvider>
    </StrictMode>
);

reportWebVitals();
