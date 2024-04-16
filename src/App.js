//import logo from './logo.svg';
import './style.css';
import Products from './Components/Products';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

// const myStyle = {
//   color: 'blue',
//   backgroundColor: 'yellow',
//   padding: '10px'
// };

//const paragraphColor = 'red';

let date = new Date();
let hour = date.getHours();
//hour = 17;
console.log(hour);
const theme = hour >= 8 && hour < 20 ? 'lightgreen' : 'darkgreen';


function App() {

  //let [name, setName] = useState('Hello');
  let [tax, setTax] = useState(20);

  return (
    <>
      <div className='container' style={{ backgroundColor: theme }}>
        {/* <img src={ logo } className='logo' alt='logo' />
        <p>Pozdrav. Ja se zovem { name }!</p>
        <p style={ myStyle }>Ovo je moj prvi React App</p>
        <p style={{ color: paragraphColor, backgroundColor: 'yellow', padding: '10px' }}>Ovo je moj prvi React App</p>
      

        <button className='btn btn-outline-primary' onClick={ () => console.log(name) }>{ name }</button>
        <input type="text" onInput={ (e) => setName(e.target.value) } />

        <br /><br /> */}

        <label>Tax:</label><br />
        <input className='form-control w-25' type="number" onInput={ (e) => setTax(e.target.value) } value={tax}/>

        <Products tax={ tax } />
      </div>

    </>
  );
}

export default App;
