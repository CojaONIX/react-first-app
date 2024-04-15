import logo from './logo.svg';
import './style.css';

const NAME = 'Goran';
const myStyle = {
  color: 'blue',
  backgroundColor: 'yellow',
  padding: '10px'
};

function App() {
  return (
    <div className="App">
        <img src={logo} className="logo" alt="logo" />
        <h1>Hello world</h1>
        <p>Pozdrav. Ja se zovem {NAME}!</p>
        <p style={myStyle}>Ovo je moj prvi React App</p>
    </div>
  );
}

export default App;
