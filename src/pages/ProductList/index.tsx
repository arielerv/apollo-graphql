import {useQuery} from '@apollo/client';

import {IProduct, ISearchProduct} from 'interfaces';
import {Loader, ProductCard} from 'components';
import {GET_PRODUCTS_QUERY} from 'graphql/queries';

import {Container, Text, Cards} from './styled';
import SearchParams from './SearchParams';

function ProductList() {
    const options = {variables: {filters: {term: '', groupByProduct: true}}};
    const {data = {search: {items: [], totalItems: 0}}, loading, error, refetch} = useQuery(GET_PRODUCTS_QUERY, options);
    const {items, totalItems} = data.search;

    const handleSearch = (values: ISearchProduct) => {
        return refetch({
            filters: {term: values.term, groupByProduct: true}
        });
    };

    return (
        <Container>
            <>
                {loading && <Loader/>}
                {!loading && (
                    <>
                        <SearchParams onSearch={handleSearch}/>
                        <Text>{`${totalItems} products were found`}</Text>
                        <Cards>
                            {items.map((product: IProduct) => <ProductCard key={product.productId} product={product}/>)}
                        </Cards>
                    </>
                )}
                {!loading && error ? error : ''}
            </>
        </Container>
    );
}

export default ProductList;
