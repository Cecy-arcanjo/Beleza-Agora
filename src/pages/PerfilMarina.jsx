import React from 'react';
import './PerfilMarina.css';

export function PerfilMarina({ irParaTela }) {
    return (
        <div className="perfil-container">
            {/* NAVBAR */}
            <header className="navbar-perfil">
                <div className="logo-box" onClick={() => irParaTela && irParaTela('inicio')}>
                    <div className="logo-badge-perfil">B</div>
                    <div className="logo-texto-perfil">
                        <h1>Beleza agora</h1>
                        <span className="logo-subtexto-perfil">AGENDE SUA BELEZA, DO SEU JEITO</span>
                    </div>
                </div>

                <nav className="nav-links-perfil">
                    <button onClick={() => irParaTela && irParaTela('inicio')} className="nav-item">
                        Início
                    </button>
                    <button onClick={() => irParaTela && irParaTela('explorar')} className="nav-item ativo">
                        Explorar
                    </button>
                    <button className="nav-item">Favoritos</button>
                    <button className="nav-item">Mensagens</button>
                </nav>

                <div className="local-usuario-badge">
                    📍 Massapê, CE
                    <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
                        alt="Usuário"
                        className="avatar-usuario"
                    />
                </div>
            </header>

            {/* CONTEÚDO DO PERFIL */}
            <main className="conteudo-perfil">
                {/* ESQUERDA: CARD MARINA LIMA */}
                <aside className="card-perfil-lateral">
                    <div className="container-foto-marina">
                        <span className="badge-disponivel">● Disponível esta semana</span>
                        <img
                            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600"
                            alt="Marina Lima"
                        />
                    </div>

                    <div className="detalhes-marina">
                        <h2 className="nome-marina">
                            Marina Lima <span className="icone-verificado">✓</span>
                        </h2>
                        <p className="subtitulo-profis">Maquiadora e hair stylist · Centro</p>
                        <p className="avaliacoes-resumo">⭐ <strong>4,9</strong> <small>(127 avaliações)</small></p>

                        <div className="grid-estatisticas">
                            <div className="stat-item">
                                <strong>286</strong>
                                <small>atendimentos</small>
                            </div>
                            <div className="stat-item">
                                <strong>6 anos</strong>
                                <small>de experiência</small>
                            </div>
                            <div className="stat-item">
                                <strong>98%</strong>
                                <small>recomendam</small>
                            </div>
                        </div>

                        <div className="secao-especialidades">
                            <span className="titulo-secao-curto">Especialidades</span>
                            <div className="tags-especialidades">
                                <span className="tag-item">Maquiagem social</span>
                                <span className="tag-item">Noivas</span>
                                <span className="tag-item">Penteados</span>
                            </div>
                        </div>

                        <div className="botoes-acao">
                            {/* Adicionamos o onClick aqui para abrir a tela de opções */}
                            <button
                                className="btn-agendar"
                                onClick={() => irParaTela && irParaTela('opcoes')}
                            >
                                📅 Agendar com Marina
                            </button>

                            <button className="btn-mensagem">
                                💬 Enviar mensagem
                            </button>
                        </div>
                    </div>
                </aside>

                {/* DIREITA: DETALHES, PORTFÓLIO E HORÁRIOS */}
                <section className="coluna-conteudo-perfil">
                    {/* SOBRE E POR QUE CONTRATAR */}
                    <div className="grid-sobre-por-que">
                        <div className="box-card">
                            <span className="label-dourada">SOBRE</span>
                            <h2>Beleza com escuta e identidade</h2>
                            <p className="texto-sobre">
                                Sou maquiadora apaixonada por realçar a beleza de cada mulher. Atendo com
                                hora marcada, produtos profissionais e um cuidado especial para todos os tons
                                de pele.
                            </p>
                        </div>

                        <div className="box-card card-por-que">
                            <h4>Por que contratar</h4>
                            <ul>
                                <li>✅ Identidade verificada</li>
                                <li>✅ 127 avaliações reais</li>
                                <li>✅ Responde em até 20 min</li>
                            </ul>
                        </div>
                    </div>

                    {/* PORTFÓLIO */}
                    <div className="box-card">
                        <div className="cabecalho-portfolio">
                            <div>
                                <span className="label-dourada">TRABALHOS RECENTES</span>
                                <h3>Portfólio</h3>
                            </div>
                            <a href="#portfolio" className="link-ver-mais">Ver 24 fotos →</a>
                        </div>

                        <div className="grid-portfolio-fotos">
                            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500" alt="Foto 1" />
                            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500" alt="Foto 2" />
                            <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500" alt="Foto 3" />
                            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500" alt="Foto 4" />
                        </div>
                    </div>

                    {/* DEPOIMENTO E HORÁRIOS */}
                    <div className="grid-depoimento-horarios">
                        <div className="box-card">
                            <div className="review-topo">
                                <span>⭐ <strong>4,9</strong> (127 avaliações)</span>
                                <span>há 5 dias</span>
                            </div>
                            <p className="texto-depoimento">
                                “Marina entendeu exatamente o que eu queria. Ficou lindo e durou a festa toda.”
                            </p>
                            <div className="cliente-info">
                                <div className="avatar-cliente"></div>
                                <span><strong>Aline Nascimento</strong> · cliente verificada</span>
                            </div>
                        </div>

                        <div className="box-card">
                            <span className="titulo-secao-curto">Próximos horários</span>
                            <div className="pills-horarios">
                                <span className="pill-horario outline">Hoje 16:30</span>
                                <span className="pill-horario cheio">Amanhã 09:00</span>
                                <span className="pill-horario texto">Sex 14:00</span>
                            </div>
                            <small className="nota-atendimento">Atendimento no estúdio ou em domicílio.</small>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default PerfilMarina;