
import Products from './Components/Products';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

//import MyFirstPage from './Components/MyFirstPage';

let date = new Date();
let hour = date.getHours();
//hour = 17;
console.log(hour);
const theme = hour >= 8 && hour < 20 ? 'lightgreen' : 'darkgreen';


function App() {

  let [tax, setTax] = useState(20);

  return (
    <>
      <div className='container' style={{ backgroundColor: theme }}>
        {/* <MyFirstPage /> */}

        <label>Tax:</label><br />
        <input className='form-control w-25' type="number" onInput={ (e) => setTax(e.target.value) } value={tax}/>

        <Products tax={ tax } />
      </div>

    </>
  );
}

export default App;
