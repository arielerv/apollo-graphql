import isBoolean from 'utils/isBoolean';

const getValue = (value: string | number | object, castToArray?: boolean) => {
    if (isBoolean(value)) {
        return castToArray ? [value] : value;
    }
    if (Array.isArray(value)) {
        return value.filter(Boolean) || [];
    }
    return castToArray ? [value].filter(Boolean) : value || null;
};

export default getValue;
