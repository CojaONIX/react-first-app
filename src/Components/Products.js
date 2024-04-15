import { useState } from "react";

function Products(props) {

    let [products, setProducts] = useState({
        'iPhone 14': 10010,
        'iPhone 15': 1250,
        'Samsung S23': 1100
    });

    return (
        <div>
            <h1>Product List, tax: {props.tax}% :</h1>
            <button onClick={ () => setProducts({}) }>Delete Products</button>
            <ul>
            {
                Object.entries(products).map( ([product, price]) => {
                    return <li>{product} - ${price} - with tax: ${ priceWithTax(price, props.tax) }</li>
                })
            }
            </ul>
        </div>
    );
};

function priceWithTax(price, tax) {
    return price + price * tax / 100;
}

export default Products;