import React from 'react';
import {Form} from 'formik';
import {Input,Select} from 'components';

import {Button} from './styled';

const OrderForm = (
    {handleSubmit, productVariables, isLoadingVariables}
        : {handleSubmit: () => void, productVariables: [], isLoadingVariables: boolean}
) => {
    return (
        <Form
            data-testid="order-form"
            style={{display: 'flex', flexDirection: 'column', textAlign: 'center', width: '100%', alignItems: 'center'}}
            onSubmit={handleSubmit}
            noValidate
        >
            <Select
                name="quantity"
                label="quantity"
                options={productVariables}
                getOptionValue={(option: { id: never; }) => option.id}
                getOptionLabel={(option: { name: never; }) => option.name}
                isFormik
                isLoading={isLoadingVariables}
            />
            <Input name="productVariantId" isFormik label="Product ID" type="number"/>
            <Button type="submit" >Order it!</Button>
        </Form>
    );
};

export default OrderForm;
