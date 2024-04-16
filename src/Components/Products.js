import { useState } from "react";

function Products(props) {

    let [products, setProducts] = useState({
        'iPhone 14': 1000,
        'iPhone 15': 1250,
        'Samsung S23': 1100
    });

    let [newProductName, setNewProductName] = useState('');
    let [newProductPrice, setNewProductPrice] = useState('');
    let [infoMessage, setInfoMessage] = useState('');

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

    function search(e) {
        const searchTerm = e.currentTarget.value.toLowerCase();
        infoMessage = Object.keys(products).some(key => key.toLowerCase() === searchTerm)
                            ? 'Proizvod postoji'
                            : 'Proizvod NE postoji';
        //console.log(infoMessage);
        setInfoMessage(infoMessage);
    }

    return (
        <div>

            <button className="btn btn-outline-danger my-3" onClick={ () => setProducts({}) }>Delete Products</button>

            <h1>Product List:</h1>
            <table className="table">
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Tax</th>
                    <th>With Tax</th>
                </tr>
            {
                Object.entries(products).map( ([product, price]) => {
                    return  <tr>
                                <td>{product}</td>
                                <td>${price}</td>
                                <td>{props.tax}</td>
                                <td>${ priceWithTax(price, props.tax) }</td>
                            </tr>
                })
            }
            </table>

            <div>
                <label>Search Product: </label> <br />
                <input className="form-control w-50" type="text" onInput={ search } />
                <p>{infoMessage}</p>
            </div>
            <hr />

            <div>

                <h3>Dodavanje proizvoda</h3>
                <label>Naziv Proizvoda: </label>
                <input className='form-control w-50' type="text" value={newProductName} onInput={ (e) => setNewProductName(e.target.value) } />
                <br/>
                <label>Cena Proizvoda: </label>
                <input className='form-control w-25' type="number" value={newProductPrice} onInput={ (e) => setNewProductPrice(e.target.value) } />
                <br/>
                <button className="btn btn-outline-primary mb-5" onClick={ addProduct }>Add new product</button>
            </div>
        </div>
    );
};

function priceWithTax(price, tax) {
    return price + price * tax / 100;
}

export default Products;