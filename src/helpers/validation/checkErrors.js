
const checkErrors = ( newErrors, fieldErrorMsg ) => {
    // check if error already exists
    const errorMatch = newErrors.find((error) => {
        return error === fieldErrorMsg;
    });
    
    return {
        errorMatch,
        newErrors
    };
}

export default checkErrors;