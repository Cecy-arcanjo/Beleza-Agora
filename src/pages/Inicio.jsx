import React, { useState } from 'react';
import './Inicio.css';

export function Inicio({ irParaTela }) {
  const [busca, setBusca] = useState('');

  return (
    <div className="container-inicio">

      {/* 1. Header / Navbar */}
      <header className="cabecalho-topo">
        <div className="logotipo-marca">
          <div className="icone-logo">B</div>
          <div className="texto-logo">
            <span className="titulo-marca">Beleza agora</span>
            <span className="slogan-marca">AGENDE SUA BELEZA, DO SEU JEITO</span>
          </div>
        </div>

       <nav className="menu-navegacao">
  <a href="#inicio" className="item-nav ativo">
    Início
  </a>
  <a 
    href="#explorar" 
    className="item-nav" 
    onClick={() => irParaTela && irParaTela('explorar')}
  >
    Explorar
  </a>
  <a 
    href="#favoritos" 
    className="item-nav" 
    onClick={() => irParaTela && irParaTela('favoritos')}
  >
    Favoritos
  </a>
  <a 
    href="#mensagens" 
    className="item-nav" 
    onClick={() => irParaTela && irParaTela('mensagens')}
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

      {/* 2. Área Conteúdo Principal */}
      <main className="pagina-principal">
        {/* Banner com Campo de Busca e Estatísticas */}
        <section className="banner-hero">
          <div className="conteudo-hero">
            <span className="saudacao">OLÁ, CAROLINA 👋</span>
            <h1>Qual talento local pode ajudar você hoje?</h1>

            <div className="caixa-busca">
              <span>🔍</span>
              <input
                type="text"
                placeholder="O que você precisa hoje?"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
              <span className="atalho-teclado">⌘ K</span>
            </div>
          </div>

          <aside className="card-estatisticas">
            <div className="tags-selo">
              <span>✓ Perfis verificados</span>
              <span>✓ Contratação segura</span>
            </div>
            <div className="numeros-estatisticas">
              <div>
                <strong>180+</strong>
                <p>profissionais</p>
              </div>
              <div>
                <strong>4.9</strong>
                <p>nota média</p>
              </div>
            </div>
            <span className="badge-cidade">Feito em Massapê</span>
          </aside>
        </section>

        {/* 3. Seção Categorias */}
        <section className="secao-categorias">
          <div className="cabecalho-secao">
            <div>
              <span className="subtitulo-secao">EXPLORE</span>
              <h2>Categorias para cada momento</h2>
            </div>
            <a href="#todas" className="link-ver-mais">Ver todas →</a>
          </div>

          <div className="grid-categorias">
            <article className="card-categoria">
              <span className="icone-categoria">➕</span>
              <div>
                <h3>Beleza</h3>
                <p>42 perfis</p>
              </div>
              <span className="seta">›</span>
            </article>

            <article className="card-categoria">
              <span className="icone-categoria">✂️</span>
              <div>
                <h3>Costura</h3>
                <p>31 perfis</p>
              </div>
              <span className="seta">›</span>
            </article>

            <article className="card-categoria">
              <span className="icone-categoria">🧁</span>
              <div>
                <h3>Confeitaria</h3>
                <p>28 perfis</p>
              </div>
              <span className="seta">›</span>
            </article>

            <article className="card-categoria">
              <span className="icone-categoria">📷</span>
              <div>
                <h3>Fotografia</h3>
                <p>19 perfis</p>
              </div>
              <span className="seta">›</span>
            </article>

            <article className="card-categoria">
              <span className="icone-categoria">🏠</span>
              <div>
                <h3>Para casa</h3>
                <p>23 perfis</p>
              </div>
              <span className="seta">›</span>
            </article>
          </div>
        </section>

        {/* 4. Divisão Dupla: Profissionais + Card "Hoje" */}
        <div className="grid-conteudo-duplo">

          {/* Lado Esquerdo: Profissionais Recomendadas */}
          <section>
            <div className="cabecalho-secao">
              <div>
                <span className="subtitulo-secao">BEM AVALIADAS</span>
                <h2>Profissionais recomendadas</h2>
              </div>
              <a href="#ver-mais" className="link-ver-mais">Ver mais →</a>
            </div>

            <div className="grid-profissionais">
              <article className="card-profissional">
                <div className="imagem-box">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" alt="Marina" />
                  <span className="selo-verificado">🛡️</span>
                </div>
                <h3>Marina Lima</h3>
                <p className="especialidade">Maquiagem e penteado · 1,2 km</p>
                <div className="avaliacao">⭐ <strong>4,9</strong> (verificada)</div>
                <p className="preco">a partir de <strong>R$ 45</strong></p>
              </article>

              <article className="card-profissional">
                <div className="imagem-box">
                  <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400" alt="Ana" />
                  <span className="selo-verificado">🛡️</span>
                </div>
                <h3>Ana Cláudia</h3>
                <p className="especialidade">Confeitaria afetiva · 1,2 km</p>
                <div className="avaliacao">⭐ <strong>4,9</strong> (verificada)</div>
                <p className="preco">a partir de <strong>R$ 45</strong></p>
              </article>

              <article className="card-profissional">
                <div className="imagem-box">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400" alt="Jéssica" />
                  <span className="selo-verificado">🛡️</span>
                </div>
                <h3>Jéssica Moura</h3>
                <p className="especialidade">Fotografia de família · 1,2 km</p>
                <div className="avaliacao">⭐ <strong>4,9</strong> (verificada)</div>
                <p className="preco">a partir de <strong>R$ 45</strong></p>
              </article>

              <article className="card-profissional">
                <div className="imagem-box">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400" alt="Rita" />
                  <span className="selo-verificado">🛡️</span>
                </div>
                <h3>Rita Gomes</h3>
                <p className="especialidade">Costura sob medida · 1,2 km</p>
                <div className="avaliacao">⭐ <strong>4,9</strong> (verificada)</div>
                <p className="preco">a partir de <strong>R$ 45</strong></p>
              </article>
            </div>
          </section>

          {/* Lado Direito: Seção "Hoje" */}
          <aside>
            <div className="cabecalho-secao">
              <div>
                <span className="subtitulo-secao">PERTO DE VOCÊ</span>
                <h2>Hoje</h2>
              </div>
            </div>

            <article className="card-agendamento-hoje">
              <span className="distancia">📍 a 800 m</span>
              <h3>Escova + hidratação</h3>
              <p>com Luana Melo · 15h30</p>
              <span className="badge-horarios">2 horários livres</span>
            </article>
          </aside>

        </div>

      </main>
    </div>
  );
}

export default Inicio;