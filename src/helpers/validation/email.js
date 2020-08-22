
export const validateEmail = ( email ) => {
    
    const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    const isEmailValid =  emailRegExp.test(email);

    return isEmailValid;

}
