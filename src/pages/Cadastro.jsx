import React from 'react';
import './Cadastro.css';

export function Cadastro() {
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
                  <span className="icon">📅</span>
                  <input type="text" placeholder="__ / __ / ____" />
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
                <span className="icon">🔒</span>
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