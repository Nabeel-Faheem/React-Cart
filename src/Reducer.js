
import { products } from './api/products';
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREMENT_QUANTITIY,
    DECREMENT_QUANTITIY,
    CLOSE_MODAL,
    // SUBMIT_PAYMENT
} from './actions';

// initial app level state
const initialState = {
    products,
    cart: [],
    isModalOpen: false,
};

const reducer = ( state = initialState, action ) => {

    const actionType = action.type;

    switch( actionType ) {

        case ADD_TO_CART:
            // console.log( action.payload.updatedCart );

            return {
                ...state,
                cart: action.payload.updatedCart,
                isModalOpen: true
            }

        case REMOVE_FROM_CART:
            // console.log( action.payload.newCart );
            return {
                ...state,
                cart: action.payload.newCart
            }
        
        case INCREMENT_QUANTITIY:
            return {
                ...state,
                cart: action.payload.newCart
            }
        
        case DECREMENT_QUANTITIY:
            return {
                ...state,
                cart: action.payload.newCart
            }

        case CLOSE_MODAL:
            return {
                ...state,
                isModalOpen: false
            }
        
        // case SUBMIT_PAYMENT:
        //     console.log('Thanks for the payment!');
        //     return {
        //         ...state,
        //     }

        default:
            return {
                ...state
            }

    }

}

export default reducer;