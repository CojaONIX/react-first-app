import logo from './logo.svg';
import './style.css';
import Products from './Components/Products';
import { useState } from 'react';

const myStyle = {
  color: 'blue',
  backgroundColor: 'yellow',
  padding: '10px'
};

const paragraphColor = 'red';

let date = new Date();
let hour = date.getHours();
//hour = 17;
console.log(hour);
const theme = hour >= 8 && hour < 20 ? 'lightgreen' : 'darkgreen';


function App() {

  let [name, setName] = useState('Hello');
  let [tax, setTax] = useState(20);

  return (
    <>
      <div style={{ backgroundColor: theme }}>
          <img src={ logo } className='logo' alt='logo' />
          <p>Pozdrav. Ja se zovem { name }!</p>
          <p style={ myStyle }>Ovo je moj prvi React App</p>
          <p style={{ color: paragraphColor, backgroundColor: 'yellow', padding: '10px' }}>Ovo je moj prvi React App</p>
      </div>

      <button onClick={ () => console.log(name) }>{ name }</button>
      <input type="text" onInput={ (e) => setName(e.target.value) } />

      <br /><br />

      <label>Tax:</label><br />
      <input type="number" onInput={ (e) => setTax(e.target.value) } />

      <Products tax={ tax } />

    </>
  );
}

export default App;
