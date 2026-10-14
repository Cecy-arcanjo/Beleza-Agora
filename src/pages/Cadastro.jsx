import React, { useState } from 'react';
import './Cadastro.css';

export function Cadastro() {
    const [nascimento, setNascimento] = useState('');

    const handleDataChange = (e) => {
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
        <div className="login-container">
            {/* Lado Esquerdo - Banner Rosa */}
            <div className="banner-side">
                <h1>Sua cidade tem talentos extraordinários.</h1>
                <p>Entre para contratar serviços locais ou apresentar seu trabalho à comunidade.</p>
            </div>

            {/* Lado Direito - Formulário */}
            <div className="form-side">
                <div className="card-form">
                    {/* Aba de alternância entre Criar Conta e Entrar */}
                    <div className="tabs">
                        <button className="tab active">Criar Conta</button>
                        <button className="tab">Entrar</button>
                    </div>

                    <h2>Que bom ter você aqui.</h2>

                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="input-group-row">
                            <div className="input-field">
                                <label>Nome do usuário</label>
                                <div className="input-wrapper">
                                    <span className="icon">✉</span>
                                    <input type="text" placeholder="nome do usuario" />
                                </div>
                            </div>

                            <div className="input-field">
                                <label>Data de nascimento</label>
                                <div className="input-wrapper">
                                    <span className="icon">
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            viewBox="0 0 24 24" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            className="icon-svg"
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
                                        type="text"
                                        placeholder="__ / __ / ____"
                                        value={nascimento}
                                        onChange={handleDataChange}
                                        maxLength={10}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="input-field">
                            <label>E-mail</label>
                            <div className="input-wrapper">
                                <span className="icon">✉</span>
                                <input type="email" placeholder="voce@exemplo.com" />
                            </div>
                        </div>

                        <div className="input-field">
                            <label>Senha</label>
                            <div className="input-wrapper">
                                <span className="icon">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        className="icon-svg"
                                    >
                                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                </span>
                                <input type="password" placeholder="••••••••" />
                            </div>
                        </div>

                        <div className="form-options">
                            <label className="checkbox-label">
                                <input type="checkbox" /> Visualizar senha
                            </label>
                            <a href="#" className="forgot-password">Esqueci minha senha</a>
                        </div>

                        <button type="submit" className="btn-submit">Criar Conta</button>

                        <div className="divider">
                            <span>ou continue com</span>
                        </div>

                        <button type="button" className="btn-google">
                            <span className="google-icon">G</span> Google
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}