
let products = {
    'iPhone 14': 1000,
    'iPhone 15': 1250,
    'Samsung S23': 1100
};

function Products(props) {
    return (
        <div>
            <h1>Product List:</h1>
            <p>tax = {props.tax}</p>
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
    return price * (1 + tax / 100);
}

export default Products;