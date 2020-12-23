import React from "react";
import Product from "./Product";

export default function ItemList(props){
    const {products} = props;
    return(
        <main className="items col-2">
            <h2>Items</h2>
                <div>
                {products.map((product) => <Product key={product.id} product={product}/>)}
                
                
            </div>
        </main>
       
    )
}