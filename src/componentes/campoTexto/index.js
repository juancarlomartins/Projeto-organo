import './campoTexto.css'
const CampoTexto = () => {
    return (
        <div className="campo-texto">
            <label>Nome</label>
            <input placeholder='Digite o seu nome'></input>
        </div>
    )
}

export default CampoTexto

// arros functions resolvem problemas de escopo em variáveis
// const variavel = () => 
//
// O arquivo foi renomeado para index.js e com isso agora é possível
//fazer import desse component de uma maneira mais organizada, pois é
// fazer a leitura apenas pela pasta que reconhece o arquivo chamado de 
// "index"