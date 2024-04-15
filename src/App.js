import logo from './logo.svg';
import './style.css';

function App() {
  const NAME = 'Goran';

  return (
    <div className="App">
        <img src={logo} className="logo" alt="logo" />
        <h1>Hello world</h1>
        <p>Pozdrav. Ja se zovem {NAME}!</p>
    </div>
  );
}

export default App;
