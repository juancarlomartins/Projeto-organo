import { useState } from 'react' // Para controlar o estado geral do componente.
import './campoTexto.css'
const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    //let valor = '' //variável para guardar o valor da entrada.


    const [valor, setValor] = useState('') // set -- forma de definir um valor. -- Nesse campo também agora são atualizados os estados juntos.

    const aoDigitado = (evento) => { // target é um evento do JavaScript.
        setValor(evento.target.value)
        console.log(valor) // guardando a referência numa variável.
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}></input>
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