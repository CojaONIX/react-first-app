
let products = [
    'iPhone 14', 'iPhone 15', 'Samsung S23'
];

function Products () {
    return (
        <>
            <h1>Hello world</h1>
            <ul>
            {
                products.map(function(product) {
                    return <li>{product}</li>
                })
            }
            </ul>
        </>
    );
};

export default Products;