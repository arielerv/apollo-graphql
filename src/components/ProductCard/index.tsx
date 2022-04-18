import React, {useEffect, useState} from 'react';
import {Formik} from 'formik';
import {useMutation, useLazyQuery} from '@apollo/client';

import {IProduct, IOrder} from 'interfaces';
import {LazyImage, Modal} from 'components';
import {GET_PRODUCT_VARIANTS, GET_PRODUCTS_QUERY} from 'graphql/queries';
import {CREATE_ORDER} from 'graphql/mutations';
import {defaultValues} from 'constant';

import OrderForm from '../OrderForm';
import validationSchema from '../OrderForm/validationSchema';
import {Card, Content, Title, Description, DescriptionContainer, Price, PriceContainer} from './styled';

const ProductCard = ({product}: {product: IProduct}) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [productId, setProductId] = useState<number | null>(null);
    const options = {filters: {term: '', groupByProduct: true}};
    const [createOrder] = useMutation(CREATE_ORDER, {
        refetchQueries:  [{query: GET_PRODUCTS_QUERY, variables: options}]
    });
    const [getVariants, {data, loading}] = useLazyQuery(GET_PRODUCT_VARIANTS);

    useEffect(() => {
        if(productId) {
            getVariants({variables : {productId}});
        }
    }, [productId]);

    const handleSubmit = (values: IOrder) => {
        createOrder({variables: values}).then(r => console.log({r}));
        setIsActive(false);
    };

    const handleClick = (id: number) => {
        setIsActive(!!id);
        setProductId(id);
    };

    console.log({data});

    return (
        <>
            <Card data-testid={`card-${product.productId}`} onClick={() => handleClick(product.productId)}>
                <LazyImage
                    src={product.productAsset?.preview}
                    alt={product.productName}
                    width={300}
                    height={200}
                />
                <Content>
                    <Title>{product.productName}</Title>
                    <DescriptionContainer>
                        <Description>{product.description}</Description>
                    </DescriptionContainer>
                    <PriceContainer>
                        <Price>{`${product.currencyCode}${product.price.min?.toLocaleString()}`}</Price>
                        <Price>-</Price>
                        <Price>{`${product.currencyCode}${product.price.max?.toLocaleString()}`}</Price>
                    </PriceContainer>
                </Content>
            </Card>
            <Modal isActive={isActive} title="Make the order" handleClose={() => setIsActive(false)}>
                <Formik
                    initialValues={defaultValues.orderForm}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    {props => (
                        <OrderForm
                            handleSubmit={props.handleSubmit}
                            productVariables={data?.product?.variants}
                            isLoadingVariables={loading}
                        />)}
                </Formik>
            </Modal>
        </>
    );
};

export default ProductCard;
