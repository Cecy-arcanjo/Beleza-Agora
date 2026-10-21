import React, { useState } from 'react';
import './Explorar.css';

export function Explorar({ irParaTela }) {
  const [busca, setBusca] = useState('');

  return (
    <div className="container-explorar">
      {/* Cabecalho Superior */}
      <header className="cabecalho-topo">
        <div className="logotipo-marca">
          <div className="icone-logo">B</div>
          <div className="texto-logo">
            <span className="titulo-marca">Beleza agora</span>
            <span className="slogan-marca">AGENDE SUA BELEZA, DO SEU JEITO</span>
          </div>
        </div>

        {/* Ordem: Início | Explorar | Favoritos | Mensagens */}
        <nav className="menu-navegacao">
          <a
            href="#inicio"
            className="item-nav"
            onClick={(e) => { e.preventDefault(); irParaTela && irParaTela('inicio'); }}
          >
            Início
          </a>
          <a href="#explorar" className="item-nav ativo">
            Explorar
          </a>
          <a
            href="#favoritos"
            className="item-nav"
            onClick={(e) => { e.preventDefault(); irParaTela && irParaTela('favoritos'); }}
          >
            Favoritos
          </a>
          <a
            href="#mensagens"
            className="item-nav"
            onClick={(e) => { e.preventDefault(); irParaTela && irParaTela('mensagens'); }}
          >
            Mensagens
          </a>
        </nav>

        <div className="perfil-topo">
          <span className="localizacao">
            <span className="icone">
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
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            Massapê, CE
          </span>
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
            alt="Usuário"
            className="foto-perfil"
          />
        </div>
      </header>

      {/* Conteudo Principal */}
      <main className="pagina-principal">
        <section className="cabecalho-explorar">
          <div className="textos-intro">
            <span className="subtitulo-secao">TUDO QUE MASSAPÊ SABE FAZER</span>
            <h1>Explore por categoria</h1>
            <p>Encontre serviços feitos com cuidado, perto de você.</p>
          </div>

          <div className="caixa-busca">
            <span className="icone-busca">🔍</span>
            <input
              type="text"
              placeholder="Buscar uma categoria ou serviço"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
            <span className="atalho-teclado">⌘ K</span>
          </div>
        </section>

        {/* Banner Rosa Destaque (Clica e vai para a tela de beleza) */}
        <section
          className="banner-destaque"
          onClick={() => irParaTela && irParaTela('beleza')}
          style={{ cursor: 'pointer' }}
        >
          <div className="conteudo-destaque">
            <span className="badge-semana">Mais procurada nesta semana</span>
            <h2>Beleza para celebrar você</h2>
            <p>Maquiagem, cabelos, unhas e cuidados por profissionais queridas da cidade.</p>
          </div>
          <div className="imagem-destaque-container">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800"
              alt="Profissionais de beleza"
            />
          </div>
        </section>

        <section className="secao-grid-categorias">
          <div className="cabecalho-grid">
            <span className="subtitulo-secao">8 CAMINHOS PARA DESCOBRIR</span>
            <h2>Escolha o que você precisa</h2>
          </div>

          <div className="grid-categorias-explorar">
            {/* CARD BELEZA - Clique redireciona para a tela 'beleza' */}
            <article
              className="card-categoria-exp ativa"
              onClick={() => irParaTela && irParaTela('beleza')}
              style={{ cursor: 'pointer' }}
            >
              <div className="icone-box">✨</div>
              <div className="info-cat">
                <h3>Beleza</h3>
                <p>42 profissionais</p>
              </div>
              <span className="seta">›</span>
            </article>

            <article className="card-categoria-exp">
              <div className="icone-box">✂️</div>
              <div className="info-cat">
                <h3>Costura</h3>
                <p>31 profissionais</p>
              </div>
              <span className="seta">›</span>
            </article>

            <article className="card-categoria-exp">
              <div className="icone-box">🧁</div>
              <div className="info-cat">
                <h3>Confeitaria</h3>
                <p>28 profissionais</p>
              </div>
              <span className="seta">›</span>
            </article>

            <article className="card-categoria-exp">
              <div className="icone-box">📷</div>
              <div className="info-cat">
                <h3>Fotografia</h3>
                <p>19 profissionais</p>
              </div>
              <span className="seta">›</span>
            </article>

            <article className="card-categoria-exp">
              <div className="icone-box">🎨</div>
              <div className="info-cat">
                <h3>Artesanato</h3>
                <p>36 profissionais</p>
              </div>
              <span className="seta">›</span>
            </article>

            <article className="card-categoria-exp">
              <div className="icone-box">💆‍♀️</div>
              <div className="info-cat">
                <h3>Bem-estar</h3>
                <p>24 profissionais</p>
              </div>
              <span className="seta">›</span>
            </article>

            <article className="card-categoria-exp">
              <div className="icone-box">📖</div>
              <div className="info-cat">
                <h3>Aulas</h3>
                <p>17 profissionais</p>
              </div>
              <span className="seta">›</span>
            </article>

            <article className="card-categoria-exp">
              <div className="icone-box">🏠</div>
              <div className="info-cat">
                <h3>Serviços para casa</h3>
                <p>23 profissionais</p>
              </div>
              <span className="seta">›</span>
            </article>
          </div>
        </section>

        <footer className="banner-rodape-depoimento">
          <p className="frase-aspas">“Organizado, confiável e feito para nossa cidade”</p>
          <span className="nota-rodape">4,9 de média · mais de 860 contratações locais</span>
        </footer>
      </main>
    </div>
  );
}

export default Explorar;