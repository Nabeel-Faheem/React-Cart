
export const validateDate = ( date ) => {
    var temp = date.split('-');
    var d = new Date(temp[0] + '-' + temp[1] + '-' + temp[2]);
    // console.log( temp[0], temp[1], temp[2] );
    // console.log( d.getMonth(), d.getDate(), d.getFullYear() );
    const isDateValid =  (d && (d.getMonth() + 1) == temp[1] && d.getDate() == Number(temp[2]) && d.getFullYear() == Number(temp[0]));
    console.log( isDateValid );
    return isDateValid;

}