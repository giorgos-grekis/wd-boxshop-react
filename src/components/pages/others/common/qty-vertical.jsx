import React, { useEffect } from 'react';
import { connect } from 'react-redux';

//Import Action
import { incrementQty, decrementQty } from '../../../../action';

function QtyVertical ( props ) {

    useEffect( () => {
        document.querySelector( `#${props.id} input` ).value = props.product.qty;
    } )

    const countUp = ( e ) => {
        props.incrementQty( props.product );
    }

    const countDown = ( e ) => {
        if ( props.product.qty > 1 ) {
            props.decrementQty( props.product );
        }
    }

    return (
        <div className="input-group  bootstrap-touchspin bootstrap-touchspin-injected" id={ props.id }>
            <label className="sr-only" htmlFor={props.id + 'posotita'}>Πεδίο για να ορίσετε την ποσότητα του προϊόντος</label>
            <input className="vertical-quantity form-control" id={props.id + 'posotita'} type="text" defaultValue={ props.product.qty } />
            <span className="input-group-btn-vertical">
                <button className="btn btn-outline bootstrap-touchspin-up icon-up-dir" onClick={ countUp } type="button" title='αυξηση ποσοτητας'></button>
                <button className="btn btn-outline bootstrap-touchspin-down icon-down-dir" onClick={ countDown } type="button" title='μειωση ποσοτητας'></button>
            </span>
        </div>
    )
}

export default connect( null, { incrementQty, decrementQty } )( QtyVertical );