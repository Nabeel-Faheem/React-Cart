
export const isFormValid = ( formErrors, formFields ) => {

    // console.log( formErrors, formFields );
    const objValues = Object.values( formFields );
    // 
    const emptyField = objValues.find(( item ) => {
        return item.val === '';
    });
    console.log( emptyField );
    console.log( (!emptyField) && (formErrors.length === 0) );
    return ((!emptyField) && (formErrors.length === 0)) ? true : false;
}