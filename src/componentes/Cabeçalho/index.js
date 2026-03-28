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

                    <button
                        className='botao-menu'
                        onClick={() => handleMenuClick('Conteúdo')}
                    >
                        Conteúdo
                    </button>

                    <button
                        className='botao-menu'
                        onClick={() => handleMenuClick('Sobre')}
                    >
                        Sobre
                    </button>
                    <button
                        className='botao-menu'
                        onClick={() => handleMenuClick('Contato')}
                    >
                        Contato
                    </button>
                </nav>

                {/* caixa de pesquisa */}
                <form className='pesquisa-conteiner' onSubmit={handlePesquisa}>
                    <div className='pesquisa-wrapper'>
                        <input
                            type='text'
                            className='pesquisa-input'
                            placeholder='Pesquisar...'
                            value={termoPesquisa}
                            onChange={(e) => setTermoPesquisa(e.target.value)}
                        />
                        <button type='submit' className='pesquisa-botao'>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path 
                                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </form>

                {/*Botão menu mobile */}
                <button
                    className='menu-mobile-botao'
                    onClick={() => setMenuAberto(!menuAberto)}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {menuAberto ? (
                            <path 
                                d="M6 18L18 6M6 6L18 18" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            />
                        ) : (
                            <path 
                                d="M3 12H21M3 6H21M3 18H21" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            />
                        )}
                    </svg>
                </button>

                {/*menu mobile*/}
                {menuAberto && (
                    <div className='menu-mobile'>
                        <button
                            className='botao-menu-mobile'
                            onClick={() => handleMenuClick('Início')}
                        >
                            Início
                        </button>

                        <button
                            className='botao-menu-mobile'
                            onClick={() => handleMenuClick('Sobre')}
                        >
                            Sobre
                        </button>

                        <button
                            className='botao-menu-mobile'
                            onClick={() => handleMenuClick('Contato')}
                        >
                            Contato
                        </button>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Cabecalho;