import Banner from './componentes/Banner/Banner'; //É obrigatório importar primeiro todos os componentes que se for utilizar naquela página.
import Conteiner from './componentes/Conteiner';
import Formulario from './componentes/Formulário';

function App() {
  return (
    <div className="App">
      <Banner />
      <Formulario />
      <Conteiner />
    </div>
  );
}

export default App;