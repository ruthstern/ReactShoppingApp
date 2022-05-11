import React from "react";

export default function Main (props) {
    const {products} = props;
    return (
        <main className="block col-2">
            <h2> Products</h2> 
            <div className="row" >
                { products.map((product) => (
                    <product key={product.id} product={product}></product>
                )) }
            </div>
        </main>
    )
} 