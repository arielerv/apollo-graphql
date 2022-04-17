// Here we put mutations. Remove next line
import {gql} from 'graphql-tag';

export const CREATE_ORDER = gql`
    mutation createOrder($productVariantId: ID!, $quantity: Int!) {
        addItemToOrder(
            productVariantId: $productVariantId
            quantity: $quantity
        ) {
            ... on Order {
                id
                createdAt
                updatedAt
                code
                state
                active
            }
        }
    }
`;
