import React from 'react';
import {Form, ErrorMessage} from 'formik';

import {Button, Input, Label} from './styled';

const OrderForm = ({handleSubmit}: {handleSubmit: () => void}) => (
    <Form
        data-testid="order-form"
        style={{display: 'flex', flexDirection: 'column', textAlign: 'center', width: '100%', alignItems: 'center'}}
        onSubmit={handleSubmit}
        noValidate
    >
        <Label>Product ID</Label>
        <Input type="number" name="productVariantId" $isFormik/>
        <ErrorMessage name="productVariantId"/>
        <Label>Quantity</Label>
        <Input type="number" name="quantity" $isFormik/>
        <ErrorMessage name="quantity"/>
        <Button type="submit" >Order it!</Button>
    </Form>
);

export default OrderForm;
