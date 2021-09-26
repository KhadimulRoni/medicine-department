import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart,name} = props;
    let total= 0 ;
    for(const pharmaceutical of cart){
        total =total + pharmaceutical.value;
    }

    
    return (
        <div>
            <h3 className="add-company">Added Company</h3>
            <h5>Company added: {cart.length}</h5>
            <p>Total value (Cr. Taka): {total.toFixed(2)}</p>
            <p>
                <li>
                    <ul>Company: {name}</ul>
                </li>
            </p>

            
        </div>
    );
};

export default Cart;