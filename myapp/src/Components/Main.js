import React from "react";
import Product from "./Product";
import Table from "./ProductsTable";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export default function Main(props) {
    const { products, onAdd } = props;
    return (
        <Box sx={{ width: '100%', maxWidth: 800 }}>
            <Typography variant="h2" gutterBottom component="div">
                Products
            </Typography>
            {/* <div className="row" >
                {products.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd} />
                ))}
            </div> */}
            <Table/>
        </Box>
    );
} 