import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Pharmaceutical.css';


const Pharmaceutical = (props) => {
    const{img,name,established,type,value,share,rate} = props.pharmaceutical;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="medicine-company col-md-4 py-2">
            <img src={img} alt=""/>
            <p className="name">Company : {name}</p>
            <p><small>Established: {established}</small></p>
            <p><small>Company Type: {type}</small></p>
            <p><small>Value (Cr. Taka): {value}</small></p>
            <p><small>Market Share: {share}%</small></p>
            <p><small>Growth Rate: {rate}%</small></p>
            <button onClick={()=>props.handleAddToCart(props.pharmaceutical)}className="btn-purcase btn btn-primary">{cartIcon}add to cart</button>
        </div>
    );
};

export default Pharmaceutical;