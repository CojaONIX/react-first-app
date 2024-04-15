
let products = [
    'iPhone 14', 'iPhone 15', 'Samsung S23'
];

function Products (props) {
    return (
        <>
            <h1>Product List</h1>
            <p>tax = {props.tax}</p>
            <ul>
            {
                products.map(product => {
                    return <li>{product}</li>
                })
            }
            </ul>
        </>
    );
};

export default Products;