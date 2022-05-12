import React from "react";

export default function Basket (props) {
    const {cartItems, onAdd, onRemove} = props;
    return <aside className= "block .col-1">
            <h2>Cart Items</h2>
            <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
            {cartItems.map((item) =>(
                <div key={item.id} className="row">
                <div>{item.name}</div>
                <div>
                    <button on click={()=> onAdd(item)} className="add">+
                    </button>
                    <button on click={()=>onRemove(item)} className="remove">-
                    </button>
                    </div>
                    </div>
                    

            ))}

        </aside>
    );

}