import React, { Component } from 'react';

class Product extends Component {


    render() {
        return (
            <div className="product">
                <img src={ this.props.imgUrl } alt={ this.props.name } />
                <h2>{ this.props.name }</h2>
                <span>${ this.props.price }</span>
                <p>{ this.props.descp }</p>
                <button onClick={ () => this.props.addToCart( this.props.id ) }>Add to Cart</button>
            </div>
        )
    }

}

export default Product;
