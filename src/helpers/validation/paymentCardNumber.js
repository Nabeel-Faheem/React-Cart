
export const validatePaymentCardNumber = ( paymentCardNumber ) => {
    
    const paymentCardNumberRegExp = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

    const isPaymentCardNumberValid = paymentCardNumberRegExp.test( paymentCardNumber );
    // console.log( isPaymentCardNumberValid );
    return isPaymentCardNumberValid;

}