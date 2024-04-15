import logo from './logo.svg';
import './style.css';

const NAME = 'Goran';

function App() {
  return (
    <div className="App">
        <img src={logo} className="logo" alt="logo" />
        <h1>Hello world</h1>
        <p>Pozdrav. Ja se zovem {NAME}!</p>
    </div>
  );
}

export default App;
