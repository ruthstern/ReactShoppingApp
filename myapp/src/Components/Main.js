import React from "react";
import Product from "./Components/Products";

export default function Main (props) {
    const {products, onAdd} = props;
    return (
        <main className="block col-2">
            <h2> Products</h2> 
            <div className="row" >
                { products.map((product) => (
                    <product key={product.id} product={product} onAdd = {onAdd}></product>
                )) }
            </div>
        </main>
    );
} 