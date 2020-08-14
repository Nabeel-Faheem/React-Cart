import React, { Component } from 'react';
import { connect } from 'react-redux';

// Custom Imports
import {
    ADD_TO_CART
} from '../../actions';
import Wrap from '../util/Wrap';
import Product from '../util/Product';
import Modal from '../util/Modal';

class Products extends Component {

    // dispatch handlers
    addToCartHandler = ( productId ) => {
        // use this for mapDispatchToProps pattern
        // this.props.addToCartDispatcher( productId );

        // add new product to the cart
        let products = [ ...this.props.products ];
        let cart = [ ...this.props.cart ];
        const matchedProduct = products.find((product) => product.id === productId)
        const productAlreadyInCart = cart.find((product) => product.id === productId);
        if( !productAlreadyInCart ) {
            cart.push( matchedProduct );
        }

        // send new cart with the payload
        this.props.dispatch({
            type: ADD_TO_CART,
            payload: {
                updatedCart: cart
            }
        });
    }

    render() {
        return (
            <>
            { this.props.isModalOpen && <Modal modalMessage="Product added to cart!" isCartModal={ true } /> }
            <div className="products">
                <Wrap>
                    { this.props.products.map(( product ) => {
                        return <Product
                            key={ product.id } 
                            id={ product.id }
                            imgUrl={ product.url }
                            name={ product.name }
                            descp={ product.description }
                            addToCart={ this.addToCartHandler }
                        />
                    }) }
                </Wrap>
            </div>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        products: state.products,
        cart: state.cart,
        isModalOpen: state.isModalOpen
    }
}

// use this for mapDispatchToProps pattern
// const mapDispatchToProps = dispatch => {
//     return {
//         addToCartDispatcher: ( id ) => {
//             dispatch({
//                 type: ADD_TO_CART,
//                 payload: {
//                     id
//                 }
//             });
//         }
//     }
// }

// use this for mapDispatchToProps pattern
// export default connect(mapStateToProps, mapDispatchToProps)(Products);

export default connect(mapStateToProps)(Products);