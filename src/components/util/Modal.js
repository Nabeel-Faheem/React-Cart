import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Custom Imports
import {
    CLOSE_MODAL
} from '../../actions';

class Modal extends Component {

    // dispatch handlers
    closeModal = () => {
        this.props.dispatch({
            type: CLOSE_MODAL
        });
    }

    redirectToCart = () => {
        this.closeModal();
        this.props.history.push('/cart');
    }

    render() {
        return (
            <div className="modal">
                <div className="modal-inner">
                    <div className="close" onClick={ this.closeModal }></div>
                    <p>{ this.props.modalMessage }</p>
                    { this.props.isCartModal && <button onClick={ this.redirectToCart }>View Cart</button> }
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        message: state.modalMessage
    }
}

// export default connect(mapStateToProps)(withRouter(Modal));
export default withRouter(connect(mapStateToProps)(Modal));
