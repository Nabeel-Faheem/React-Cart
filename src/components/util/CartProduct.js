import React from 'react';

const CartProduct = ({ id, imgUrl, name, descp, quantity, removeFromCart, incrementProduct, decrementProduct }) => {
    return (
        <tr>
            <td>
                <img src={ imgUrl } alt={ name } />
            </td> 
            <td>{ name }</td> 
            <td className="product-descp">{ descp }</td> 
            <td className="product-quantity">
                <div className="btn-group">
                    <button 
                        onClick={ () => incrementProduct( id ) }
                    >+</button>
                    <span>{ quantity }</span>
                    <button 
                        onClick={ () => decrementProduct( id ) }
                        disabled={ (quantity === 1) ? 'disabled': null }
                    >-</button>
                </div>
            </td> 
            <td className="product-actions">
                <button onClick={ () => removeFromCart( id ) }>Delete</button>
            </td> 
        </tr>
    )
}

export default CartProduct;
