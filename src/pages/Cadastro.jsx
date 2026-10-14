import React, { useState } from 'react';
import './Cadastro.css';

export function Cadastro() {
    const [nascimento, setNascimento] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const formatarData = (e) => {
        let valor = e.target.value.replace(/\D/g, '');

        if (valor.length > 8) {
            valor = valor.slice(0, 8);
        }

        if (valor.length > 4) {
            valor = `${valor.slice(0, 2)}/${valor.slice(2, 4)}/${valor.slice(4)}`;
        } else if (valor.length > 2) {
            valor = `${valor.slice(0, 2)}/${valor.slice(2)}`;
        }

        setNascimento(valor);
    };

    return (
        <main className="pagina-principal">
            
            <aside className="bloco-banner">

                <header>
                    <h1>Sua cidade tem talentos extraordinários.</h1>
                </header>

                <section>
                    <p>Entre para contratar serviços locais ou apresentar seu trabalho à comunidade.</p>
                </section>
            </aside>

        
            <section className="bloco-formulario">
                <article className="cartao-caixa">
                    
                    <nav className="menu-abas">
                        <button className="botao-aba ativo" type="button">Criar Conta</button>
                        <button className="botao-aba" type="button">Entrar</button>
                    </nav>

                    <header>
                        <h2>Que bom ter você aqui.</h2>
                    </header>

                    <form onSubmit={(e) => e.preventDefault()}>
                        
                        <fieldset className="linha-dupla">
                            <article className="campo-texto">
                                <label htmlFor="nome">Nome do usuário</label>
                                <section className="caixa-input">
                                    <span className="icone">✉</span>
                                    <input 
                                        id="nome" 
                                        type="text" 
                                        placeholder="Nome do usuario" />
                                </section>
                            </article>

                            <article className="campo-texto">
                                <label htmlFor="nascimento">Data de nascimento</label>
                                <section className="caixa-input">
                                    <span className="icone">
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            viewBox="0 0 24 24" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            className="icone-svg"
                                        >
                                            <path d="M 19 3 L 5 3" />
                                            <path d="M 21 13 L 21 5" />
                                            <path d="M 21 5 A2 2 0 0 0 19 3" />
                                            <path d="M 3 19 A2 2 0 0 0 5 21" />
                                            <path d="M 3 5 L 3 19" />
                                            <path d="M 5 3 A2 2 0 0 0 3 5" />
                                            <path d="m16 19 2 2 4-4" />
                                            <path d="M16 2v3" />
                                            <path d="M3 9h18" />
                                            <path d="M5 21 L12.5 21" />
                                            <path d="M8 2v3" />
                                        </svg>
                                    </span>
                                    <input
                                        id="nascimento"
                                        type="text"
                                        placeholder="__ / __ / ____"
                                        value={nascimento}
                                        onChange={formatarData}
                                        maxLength={10}
                                    />
                                </section>
                            </article>
                        </fieldset>

                        <article className="campo-texto">
                            <label htmlFor="email">E-mail</label>
                            <section className="caixa-input">
                                <span className="icone">✉</span>
                                <input 
                                    id="email" 
                                    type="email" 
                                    placeholder="voce@exemplo.com" 
                                />
                            </section>
                        </article>

                        <article className="campo-texto">
                            <label htmlFor="senha">Senha</label>
                            <section className="caixa-input">
                                <span className="icone">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        className="icone-svg"
                                    >
                                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                </span>
                                <input 
                                    id="senha"
                                    type={mostrarSenha ? "text" : "password"} 
                                    placeholder="••••••••" 
                                />
                            </section>
                        </article>

                        <section className="opcoes-extras">
                            <label className="texto-checkbox">
                                <input 
                                    type="checkbox" 
                                    checked={mostrarSenha}
                                    onChange={(e) => setMostrarSenha(e.target.checked)} 
                                /> Visualizar senha
                            </label>
                            <a href="#esqueci" className="link-esqueci">Esqueci minha senha</a>
                        </section>

                        <button type="submit" className="botao-enviar">Criar Conta</button>

                        <aside className="divisor">
                            <span>ou continue com</span>
                        </aside>

                        <button type="button" className="botao-google">
                            <span className="letra-g">G</span> Google
                        </button>

                    </form>
                </article>
            </section>
        </main>
    );
}