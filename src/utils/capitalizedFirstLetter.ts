const capitalizedFirstLetter = (stringValue: string) => {
    const updatedStringValue = stringValue
        .split(/\s|-/)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('-');
    return updatedStringValue;
};

export default capitalizedFirstLetter;
