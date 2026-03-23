//Criando nosso primeiro componente React.
import './Banner.css'
export const Banner = () => {
    // JSX como o react trabalha com o visual, parece html, mas não é
    return (
        <header className="banner">
            <img src="/imagens/banner.png" alt="O Banner principal do Organo." />
        </header>
    )
}

export default Banner
//className é usado para arquivo JavaScript.