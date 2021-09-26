import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Pharmaceutical from '../Pharmaceutical/Pharmaceutical';
import './Companies.css'

const Companies = () => {

    const[company,setCompany] = useState([]);
    const[cart,setCart] = useState([]);

    useEffect(()=> {
        fetch("./company.json")
        .then(res => res.json())
        .then(data => setCompany(data))
    },[])

    const handleAddToCart = (pharmaceutical) =>{
       const newCart = [...cart,pharmaceutical];
       setCart(newCart);
    }





    return (
        <div className="companies container">

            <div className="row container">
                <div className="col-md-9 medicine">
                    <div className="row medicine-details">
            
                     {
                        company.map(pharmaceutical=> <Pharmaceutical 
                        key={pharmaceutical.rank} 
                        pharmaceutical={pharmaceutical} 
                        handleAddToCart = {handleAddToCart}>
                        </Pharmaceutical>)
                     }
                    
                    </div>
                
                </div>
                <div className="col-md-3 cart">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Companies;