import React from "react";
import {Link} from "react-router-dom";
import Product from '../componets/Product';

const ProductsPage = (props) => {
    return (
        <>
            <Product name={props.match.params.id}/>
            <Link to="/products">Powrót</Link>
        </>
    )
};

export default ProductsPage;