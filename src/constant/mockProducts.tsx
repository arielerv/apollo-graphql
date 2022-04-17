import {GET_PRODUCTS_QUERY} from '../graphql/queries';

const mockProducts = [
    {
        request: {
            query: GET_PRODUCTS_QUERY
        },
        result: {
            data: {
                products: {
                    items: [
                        {id: 1, name: 'test_1', description: 'desc_1', assets: [{id: 1, name: '', preview: ''}]},
                        {id: 2, name: 'test_2', description: 'desc_2', assets: [{id: 2, name: '', preview: ''}]}
                    ],
                    totalItems: 2
                }
            }
        }
    }
];

export default mockProducts;
