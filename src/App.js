import Banner from './componentes/Banner/Banner'; //É obrigatório importar primeiro todos os componentes que se for utilizar naquela página.
import CampoTexto from './componentes/campoTexto';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome" placeholder="Digite o seu nome"/>
      <CampoTexto label="Cargo" placeholder="Digite o seu cargo"/>
      <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
    </div>
  );
}

export default App;
