import logo from './logo.svg';
import './App.css';
import Banner from './componentes/Banner/Banner'; //É obrigatório importar primeiro todos os componentes que se for utilizar naquela página.

function App() {
  return (
    <div className="App">
      <Banner />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edite <code>src/App.js</code> e salve para recarregar.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Projeto Organo
        </a>
      </header>
    </div>
  );
}

export default App;
