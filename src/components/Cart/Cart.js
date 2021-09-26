import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart,name} = props;
    console.log(name)
    
    let total= 0 ;
    for(const pharmaceutical of cart){
        // console.log(pharmaceutical.name)
        total =total + pharmaceutical.value;
    }

    let Name ='';
    for (const names of cart){
        console.log(names.name)
        Name = Name + names.name;
    }


    
    return (
        <div className="cart-details pt-2">
            <h3 className="add-company">Company Cart</h3>
            <h5>Company added: {cart.length}</h5>
            <p className="total-value">Total value (Cr. Taka): {total.toFixed(2)}</p>
            <div>
                <ul><p>Name:{Name}</p></ul>
            </div>
            
        </div>
    );
};

export default Cart;