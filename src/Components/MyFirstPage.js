import logo from '../logo.svg';
import '../style.css';
import { useState } from 'react';

const myStyle = {
  color: 'blue',
  backgroundColor: 'yellow',
  padding: '10px'
};

const paragraphColor = 'red';

function MyFirstPage() {
    let [name, setName] = useState('Hello');

    return (
        <>
            <img src={ logo } className='logo' alt='logo' />
            <h1>Pozdrav. Ja se zovem { name }!</h1>
            <p style={ myStyle }>Ovo je moj prvi React App</p>
            <p style={{ color: paragraphColor, backgroundColor: 'yellow', padding: '10px' }}>Ovo je moj prvi React App</p>
        

            <button className='btn btn-outline-primary' onClick={ () => console.log(name) }>{ name }</button>
            <input type="text" onInput={ (e) => setName(e.target.value) } />

            <br /><br />
        </>
    );
}

export default MyFirstPage;