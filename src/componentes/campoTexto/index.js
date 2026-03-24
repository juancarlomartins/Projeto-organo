import './campoTexto.css'
const CampoTexto = (props) => {
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={props.placeholder}></input>
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


//props é uma propiedade para receber o valor do label que foi digitado no app.js
//Assim é possível reaproveitar o campo para outros valores de entrada de dados.