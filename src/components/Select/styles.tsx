const getBorderColor = (isInvalid: boolean, isFocused: boolean) => {
    if(isInvalid) {
        return 'red !important';
    }
    return isFocused ? 'dimgray !important' : 'none !important';
};
const styles = (isInvalid: boolean) => ({
    container: (provided: object) => {
        return {
            ...provided,
            padding: '0',
            fontFamily: 'Arial, sans serif'
        };
    },
    control: (provided: object, state: {isFocused: boolean}) => ({
        ...provided,
        border: '2px solid white',
        borderRadius: '5px',
        boxShadow: '0 0 0 1px grey !important',
        borderColor: getBorderColor(isInvalid, state.isFocused),
        '&:hover': {
            borderColor: 'transparent'
        }
    }),
    valueContainer: (provided: object) => ({
        ...provided,
        padding: '4px 6px'
    }),
    input: (provided: object) => ({
        ...provided
    }),
    menuList: (provided: object) => ({
        ...provided,
        minHeight: 'fit-content',
        background: 'white',
        borderRadius: '5px'
    }),
    menu: (provided: object) => ({
        ...provided,
        zIndex: 9999
    }),
    singleValue: (provided: object) => ({
        ...provided,
        color: 'dimgray'
    }),
    multiValueRemove: (provided: object, state: {isDisabled: boolean}) => ({
        ...provided,
        display: state.isDisabled ? 'none' : 'block',
        color: 'dimgray'
    })
});

export default styles;
