import React from 'react'


export default function Product(props) {
    const {product} = props;
    return (
        <div className="data">
            <div className="item">
                
                {product.name}                 X
                
            </div>    
            
            <button>+</button>
               <div>1</div>
            <button>-</button>
            
            <div className="price">$10</div>
        </div>
    )
}
