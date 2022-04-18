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

export const GET_PRODUCT_VARIANTS = gql`
query getVariants($productId: ID!) {
  product(id: $productId) {
    id
    name
    variants {
      id
      name
    }
  }
}
`;
