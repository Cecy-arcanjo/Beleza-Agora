import React, { useState } from 'react';
import './Beleza.css'; // <-- Importa o CSS tradicional aqui!

export function Beleza({ irParaTela }) {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Maquiagem');

  const categorias = [
    { id: 'Maquiagem', nome: 'Maquiagem', qtd: '18 profissionais', icon: '✨' },
    { id: 'Cabelos', nome: 'Cabelos', qtd: '16 profissionais', icon: '✂️' },
    { id: 'Unhas', nome: 'Unhas', qtd: '14 profissionais', icon: '✋' },
    { id: 'Sobrancelhas', nome: 'Sobrancelhas', qtd: '11 profissionais', icon: '👁️' },
    { id: 'Estetica', nome: 'Estética', qtd: '9 profissionais', icon: '🌸' },
  ];

  const destaques = [
    {
      id: 'marina',
      nome: 'Marina Lima',
      categoria: 'Maquiagem social',
      distancia: '1,2 km',
      nota: '4,9',
      status: 'verificada',
      preco: 'a partir de R$ 70',
      imagem: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'luana',
      nome: 'Luana Melo',
      categoria: 'Cabelos e hidratação',
      distancia: '1,2 km',
      nota: '4,9',
      status: 'verificada',
      preco: 'a partir de R$ 45',
      imagem: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'dani',
      nome: 'Dani Araújo',
      categoria: 'Unhas e nail art',
      distancia: '1,2 km',
      nota: '4,9',
      status: 'verificada',
      preco: 'a partir de R$ 35',
      imagem: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=600',
    },
  ];

  return (
    <div className="beleza-container">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo-container" onClick={() => irParaTela && irParaTela('inicio')}>
          <div className="logo-badge">B</div>
          <div className="logo-text">
            <h1>Beleza agora</h1>
            <span className="logo-subtext">AGENDE SUA BELEZA, DO SEU JEITO</span>
          </div>
        </div>

        <nav className="nav-links">
          <button onClick={() => irParaTela && irParaTela('inicio')} className="nav-link">
            Início
          </button>
          <button onClick={() => irParaTela && irParaTela('explorar')} className="nav-link active">
            Explorar
          </button>
          <button className="nav-link">Favoritos</button>
          <button className="nav-link">Mensagens</button>
        </nav>

        <div className="user-location-badge">
          📍 Massapê, CE
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
            alt="Usuário"
            className="user-avatar"
          />
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="main-content">
        {/* BREADCRUMB */}
        <div className="breadcrumb">
          <span className="breadcrumb-link" onClick={() => irParaTela && irParaTela('explorar')}>
            Explorar
          </span>
          <span>/</span>
          <span className="breadcrumb-active">Beleza</span>
        </div>

        {/* BANNER PRINCIPAL COM A IMAGEM EM INCLINAÇÃO */}
        <div className="banner-container">
          <div className="banner-text-content">
            <span className="banner-tag">✨ BELEZA E AUTOCUIDADO</span>
            <h2 className="banner-title">Seu momento, do seu jeito.</h2>
            <p className="banner-description">
              Conheça profissionais que unem técnica, escuta e carinho para realçar o que você tem de melhor.
            </p>

            <div className="banner-buttons">
              <button className="btn-banner">Ver todas as profissionais</button>
              <span className="badge-verificados">42 perfis verificados</span>
            </div>
          </div>

          {/* FOTO CORTADA E ROTACIONADA NO CANTO DO BANNER */}
          <div className="banner-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800"
              alt="Profissional"
            />
          </div>
        </div>

        {/* CATEGORIAS */}
        <section>
          <span className="section-title-tag">ENCONTRE SEU CUIDADO</span>
          <h3 className="section-heading">O que você procura?</h3>

          <div className="categories-grid">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoriaAtiva(cat.id)}
                className={`category-card ${categoriaAtiva === cat.id ? 'active' : ''}`}
              >
                <div className="category-icon">{cat.icon}</div>
                <strong className="category-name">{cat.nome}</strong>
                <small className="category-count">{cat.qtd}</small>
              </button>
            ))}
          </div>
        </section>

        {/* DESTAQUES */}
        <section>
          <span className="section-title-tag">ESCOLHAS DA COMUNIDADE</span>
          <h3 className="section-heading">Destaques em beleza</h3>

          <div className="cards-grid">
            {destaques.map((item) => (
              <div
                key={item.id}
                onClick={() => item.id === 'marina' && irParaTela && irParaTela('perfil')}
                className="card-item"
              >
                <div className="card-img-container">
                  <img src={item.imagem} alt={item.nome} />
                  <div className="verified-badge">✓</div>
                </div>

                <div className="card-info">
                  <h4 className="card-name">{item.nome}</h4>
                  <p className="card-category">
                    {item.categoria} · {item.distancia}
                  </p>

                  <div className="card-rating">
                    <span className="star-icon">★</span>
                    <strong>{item.nota}</strong>
                    <span>({item.status})</span>
                  </div>

                  <p className="card-price">{item.preco}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Beleza;