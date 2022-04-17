import {gql} from 'graphql-tag';

export const GET_PRODUCTS_QUERY = gql`
query Search($filters: SearchInput!) {
  search(input: $filters) {
    items {
      productId
      productName
      price {
        ... on SinglePrice {
          value
        }
         ... on PriceRange {
          min
          max
        }
      }
      currencyCode
      productAsset {
        id
        preview
      }
    }
    totalItems
  }
}
`;
