import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { SUBMIT_PAYMENT } from '../../actions';
import Wrap from '../util/Wrap';
import LazyFallback from '../util/LazyFallback';

import { validateEmail } from '../../helpers/validation/email';
import { validatePaymentCardNumber } from '../../helpers/validation/paymentCardNumber';
import { validateDate } from '../../helpers/validation/date';
import { isFormValid } from '../../helpers/validation/formValidity';
import checkErrors from '../../helpers/validation/checkErrors';

class Checkout extends Component {

    // constructor
    constructor( props ) {

        // super call
        super( props );

        // initial state
        this.state = {
            fields: {
                emailField: {
                    type: 'email',
                    val: '',
                    errorMsg: 'Invalid Email Address'
                },
                cardNumberField: {
                    type: 'card_number',
                    val: '',
                    errorMsg: 'Invalid Payment Number'
                },
                dateField: {
                    type: 'date',
                    val: '',
                    errorMsg: 'Invalid Date'
                }
            },
            errors: [],
            isFormValidated: false,
            isPaying: false
        }

        // explicit bindings
        this.inputChangeHandler = this.inputChangeHandler.bind(this)
        this.validateInput = this.validateInput.bind(this);
        this.paymentSubmitHandler = this.paymentSubmitHandler.bind(this);
    }

    inputChangeHandler( e ) {

        // get the input type
        const target_input = e.target.name;
        
        // check for input type 
        if( target_input === 'email' ) {

            let inputFields = { ...this.state.fields };
            this.setState({
                fields: {
                    ...inputFields,
                    emailField: {
                        ...this.state.fields.emailField,
                        val: e.target.value,
                    }
                }
            });
        }
        else if( target_input === 'card_number' ) {
            let inputFields = { ...this.state.fields };
            this.setState({
                fields: {
                    ...inputFields,
                    cardNumberField: {
                        ...this.state.fields.cardNumberField,
                        val: e.target.value
                    }
                }
            });
        }
        else {
            let inputFields = { ...this.state.fields };
            this.setState({
                fields: {
                    ...inputFields,
                    dateField: {
                        ...this.state.fields.dateField,
                        val: e.target.value
                    }
                }
            });
        }
    }

    // Input Validation Handler
    validateInput( e ){
        // get the input type
        const target_input = e.target.name;

        // get the input value
        const value = e.target.value;
        
        // validate field based on its type
        switch( target_input ) {

            case 'email':
                if( !validateEmail( value ) ) {

                    const { errorMatch, newErrors } = checkErrors( [ ...this.state.errors ], this.state.fields.emailField.errorMsg );
                    if( !errorMatch ) {
                        newErrors.push(this.state.fields.emailField.errorMsg);
                        this.setState({
                            errors: [
                                ...newErrors
                            ],
                        });
                    }
                } else {
                    
                    const { errorMatch, newErrors } = checkErrors( [ ...this.state.errors ], this.state.fields.emailField.errorMsg );
                    
                    // if same error already exists then do not add it again
                    if(errorMatch) {
                        const remainingErrors = newErrors.filter((error) => {
                            return error !== errorMatch;
                        });

                        this.setState({
                            errors: [
                                ...remainingErrors
                            ],
                        });   
                    }
                    
                }
                break;

            case 'card_number':
                if( !validatePaymentCardNumber( value ) ) {
                    
                    const { errorMatch, newErrors } = checkErrors( [ ...this.state.errors ], this.state.fields.cardNumberField.errorMsg );
                    
                    if( !errorMatch ) {
                        newErrors.push(this.state.fields.cardNumberField.errorMsg);
                        this.setState({
                            errors: [
                                ...newErrors
                            ],
                        });
                    }
                } else {
                    
                    const { errorMatch, newErrors } = checkErrors( [ ...this.state.errors ], this.state.fields.cardNumberField.errorMsg );
                    
                    if(errorMatch) {
                        const remainingErrors = newErrors.filter((error) => {
                            return error !== errorMatch;
                        });
                        this.setState({
                            errors: [
                                ...remainingErrors
                            ],
                        });   
                    }
                }
                break;

            case 'date':
                
                if( !validateDate(value) ) {
                    
                    const { errorMatch, newErrors } = checkErrors( [ ...this.state.errors ], this.state.fields.dateField.errorMsg );
                    if( !errorMatch ) {
                        newErrors.push(this.state.fields.dateField.errorMsg);
                        this.setState({
                            errors: [
                                ...newErrors
                            ],
                        });
                    }
                } else {
                    
                    const { errorMatch, newErrors } = checkErrors( [ ...this.state.errors ], this.state.fields.dateField.errorMsg );

                    if(errorMatch) {

                        const remainingErrors = newErrors.filter((error) => {
                            return error !== errorMatch;
                        });
                        this.setState({
                            errors: [
                                ...remainingErrors
                            ],
                        }); 
                    
                    }
                }
                break;

            default:
                return this.state;

        }

        // check if all the fields are valid
        const isValid = isFormValid( this.state.errors, this.state.fields );
        if( isValid ) {
            this.setState({
                isFormValidated: true
            });
        } else {
            this.setState({
                isFormValidated: false
            });
        }
        
    }

    paymentSubmitHandler = ( e ) => {
        e.preventDefault();
        this.setState({
            isPaying: true
        });
        setTimeout(() => {
            this.props.history.push('/');
        }, 3000);
    }

    render() {

        return (
            <div className="checkout">
                <Wrap>
                    { (this.state.errors.length !== 0) && (
                        <ul className="validation-errors">
                            { this.state.errors.map((error, index) => 
                                <li key={ index }>{ error }</li>) 
                            }
                        </ul>
                    ) }
                    <form className="checkout-form" onSubmit={ this.paymentSubmitHandler }>
                        <h1>Payment Information</h1>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            value={ this.state.fields.emailField.val }
                            onChange={ this.inputChangeHandler }
                            onBlur={ this.validateInput }
                        />
                        <input 
                            type="number" 
                            name="card_number" 
                            placeholder="Payment Card Number" 
                            value={ this.state.fields.cardNumberField.val }
                            onChange={ this.inputChangeHandler }
                            onBlur={ this.validateInput }
                        />
                        <input 
                            type="date" 
                            name="date" 
                            placeholder="Date" 
                            value={ this.state.fields.dateField.date }
                            onChange={ this.inputChangeHandler }
                            onBlur={ this.validateInput }    
                        />
                        <button 
                            type="submit"
                            disabled={ !this.state.isFormValidated ? 'disabled' : null }    
                        >Pay</button>
                    </form>
                </Wrap>
                { this.state.isPaying && <LazyFallback /> }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state
    }
}

export default connect(mapStateToProps)(Checkout);
