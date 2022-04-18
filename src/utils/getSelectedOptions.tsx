import getValue from 'utils/getValue';

const getSelectedOptions = (
    options: [], selectedValue: [] | object, getOptionValue: (option: string | number) => string | number
) => {
    console.log({options});
    const indexed = options?.reduce((acc: object, option: never) => ({
        ...acc,
        [getOptionValue(option)]: option
    }), {});
    const valueInArray = getValue(selectedValue, true);
    return Array.isArray(valueInArray)
        ? valueInArray.map((option: string | number) => indexed[option]
            || {value: option, label: option}).filter(Boolean)
        : selectedValue;
};

export default getSelectedOptions;
