import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    productVariantId: Yup.number().required('Required.'),
    quantity: Yup.number().required('Required.')
});

export default validationSchema;
