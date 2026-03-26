import React, { useState } from 'react';
import './Cabecalho.css';

const Cabecalho = () => {
    const [menuAberto, setMenuAberto] = useState(false);
    const [termoPesquisa, setTermoPesquisa] = useState('');

    const handlePesquisa = (e) => {
        e.preventDefault();
        if(termoPesquisa.trim()){
            console.log('Pesquisando por:', termoPesquisa);

            alert(`Pesquisando por: ${termoPesquisa}`);
        }
    };

    const handleMenuClick = (opcao) => {
        console.log(`Clicou em: ${opcao}`);
        setMenuAberto(false);
    };

    return(
        <header className='cabecalho'>
            <div className='cabecalho-conteiner'>
                {/* ícone do site */}
                <div className='logo-conteiner'>
                    <div className='icone-site'>
                        <svg
                            width='40'
                            height={40}
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='icone-svg'   
                        >
                            <path
                                d="M12 2L2 7L12 12L22 7L12 2Z" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                                fill="none"
                           />
                           <path 
                                d="M2 17L12 22L22 17" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                                fill="none"
                            />
                            <path 
                                d="M2 12L12 17L22 12" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                                fill="none"
                            />
                        </svg>
                    </div>
                    <span className='nome-site'>Organo</span>
                </div>

                {/*Botões de menu - Desktop*/}
                <nav className='menu-desktop'>
                    <button
                        className='botao-menu'
                        onClick={() => handleMenuClick('Início')}
                    >
                        Início
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Cabecalho;