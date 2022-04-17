import React, {useState} from 'react';
import {Formik} from 'formik';
import {useMutation} from '@apollo/client';

import {IProduct, IOrder} from 'interfaces';
import {LazyImage, Modal} from 'components';
import {GET_PRODUCTS_QUERY} from 'graphql/queries';
import {CREATE_ORDER} from 'graphql/mutations';
import {defaultValues} from 'constant';

import OrderForm from '../OrderForm';
import validationSchema from '../OrderForm/validationSchema';
import {Card, Content, Title, Description, DescriptionContainer, Price, PriceContainer} from './styled';

const ProductCard = ({product}: {product: IProduct}) => {
    const [isActive, setIsActive] = useState(false);
    const options = {filters: {term: '', groupByProduct: true}};
    const [createOrder] = useMutation(CREATE_ORDER, {
        refetchQueries:  [{query: GET_PRODUCTS_QUERY, variables: options}]
    });

    const handleSubmit = (values: IOrder) => {
        createOrder({variables: values}).then(r => console.log({r}));
        setIsActive(false);
    };

    return (
        <>
            <Card data-testid={`card-${product.productId}`} onClick={() => setIsActive(true)}>
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
                    component={OrderForm}
                    validationSchema={validationSchema}
                />
            </Modal>
        </>
    );
};

export default ProductCard;
