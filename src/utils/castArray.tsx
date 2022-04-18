const castArray = (value: boolean | string | number | object | []) => {
    if (!value) {
        return [];
    }
    if (Array.isArray(value)) {
        return value;
    }
    return [value];
};

export default castArray;
