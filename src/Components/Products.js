
let products = {
    'iPhone 14': 1000,
    'iPhone 15': 1250,
    'Samsung S23': 1100
};

function Products(props) {
    return (
        <div>
            <h1>Product List, tax: {props.tax}% :</h1>
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