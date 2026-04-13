import Banner from './componentes/Banner/Banner'; //É obrigatório importar primeiro todos os componentes que se for utilizar naquela página.
import Cabecalho from './componentes/Cabeçalho';
import Conteiner from './componentes/Conteiner';
import Footer from './componentes/footer/footer';
import Formulario from './componentes/Formulário';

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Banner />
      <Formulario />
      <Conteiner />
      <Footer />
    </div>
  );
}

export default App;