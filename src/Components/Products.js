import { useState } from "react";

function Products(props) {

    let [products, setProducts] = useState({
        'iPhone 14': 1000,
        'iPhone 15': 1250,
        'Samsung S23': 1100
    });

    let [newProductName, setNewProductName] = useState('');
    let [newProductPrice, setNewProductPrice] = useState('');

    function addProduct() {
        if(newProductName === '') {
            console.log('Naziv nije unet!');
            return;
        }

        if(newProductPrice === '') {
            console.log('Cena nije uneta!');
            return;
        }

        let newProduct = {[newProductName]: parseInt(newProductPrice)};
        setProducts( (currentProducts) => ({
            ...currentProducts,
            ...newProduct
        }) );

        setNewProductName('');
        setNewProductPrice('');
    }

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

            <div>
                <label>Naziv Proizvoda: </label>
                <input type="text" value={newProductName} onInput={ (e) => setNewProductName(e.target.value) } />
                <br/>
                <label>Cena Proizvoda: </label>
                <input type="number" value={newProductPrice} onInput={ (e) => setNewProductPrice(e.target.value) } />
                <br/>
                <button onClick={ addProduct }>Add new product</button>
            </div>
        </div>
    );
};

function priceWithTax(price, tax) {
    return price + price * tax / 100;
}

export default Products;