import React, { Component } from 'react';
import { connect } from 'react-redux';

// Custom Imports
// Custom Imports
import {
    REMOVE_FROM_CART,
    INCREMENT_QUANTITIY,
    DECREMENT_QUANTITIY,
} from '../../actions';
import Wrap from '../util/Wrap';
import CartProduct from '../util/CartProduct';

class Cart extends Component {

    // dispatch handlers
    deleteFromCartHandler = ( productId ) => {
        
        // delete item from cart
        let cart = [ ...this.props.cart ];
        let updatedCart = cart.filter(( product ) => product.id !== productId)

        // send new cart in the payload
        this.props.dispatch({
            type: REMOVE_FROM_CART,
            payload: {
                newCart: updatedCart
            }
        });
    }

    incrementProductHandler = ( productId ) => {
        
        let cart = [ ...this.props.cart ];
        let productToIncrement = cart.find(( product ) => product.id === productId);
        productToIncrement.quantity++;
        // console.log(cart.indexOf( productToIncrement ));
        // const productIndex = cart.indexOf( productToIncrement );
        // cart.splice( productIndex, 1 );
        this.props.dispatch({
            type: INCREMENT_QUANTITIY,
            payload: {
                newCart: cart,
            }
        });
    }

    decrementProductHandler = ( productId ) => {

        let cart = [ ...this.props.cart ];
        let productToIncrement = cart.find(( product ) => product.id === productId);
        productToIncrement.quantity--;
        this.props.dispatch({
            type: DECREMENT_QUANTITIY,
            payload: {
                newCart: cart,
            }
        });

    }


    // render
    render() {

        if( this.props.cart.length === 0 ) {
            return (
                <div className="cart">
                    <Wrap>
                        <h1>Cart is empty!</h1>
                    </Wrap>
                </div>
            )
        }

        return (
            <div className="cart">
                <Wrap>
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.props.cart.map((item) => 
                                <CartProduct 
                                    key={ item.id }
                                    id={ item.id }
                                    imgUrl={ item.url }
                                    name={ item.name }
                                    descp={ item.description }
                                    quantity={ item.quantity }
                                    removeFromCart={ this.deleteFromCartHandler }
                                    incrementProduct={ this.incrementProductHandler }
                                    decrementProduct={ this.decrementProductHandler }
                                />
                            ) }
                        </tbody>
                    </table>
                </Wrap>
            </div>
        )

    }

}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart);
