import React from "react";

export default function Header (props) {
    return (
        <header className="row block center">
            <div>
                <a href="#/">
                    <h1>React Shopping Cart</h1>
                </a>
            </div>
            <div>
                <a href="#/cart">Cart</a> <a href="#/SignIn">SignIn</a>
            </div>
        </header>
    ) ;
    }