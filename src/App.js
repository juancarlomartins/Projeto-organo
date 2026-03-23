import Banner from './componentes/Banner/Banner'; //É obrigatório importar primeiro todos os componentes que se for utilizar naquela página.
import CampoTexto from './componentes/campoTexto';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome"/>
      <CampoTexto label="Cargo"/>
      <CampoTexto label="Imagem"/>
    </div>
  );
}

export default App;
