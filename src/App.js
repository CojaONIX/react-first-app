import logo from './logo.svg';
import './style.css';

const name = 'Goran';
const myStyle = {
  color: 'blue',
  backgroundColor: 'yellow',
  padding: '10px'
};

const paragraphColor = 'red';

function App() {
  return (
    <div className="App">
        <img src={ logo } className="logo" alt="logo" />
        <h1>Hello world</h1>
        <p>Pozdrav. Ja se zovem { name }!</p>
        <p style={ myStyle }>Ovo je moj prvi React App</p>
        <p style={{ color: paragraphColor, backgroundColor: 'yellow', padding: '10px' }}>Ovo je moj prvi React App</p>
    </div>
  );
}

export default App;
