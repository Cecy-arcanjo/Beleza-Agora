import React, { useState } from 'react';
import { Cadastro } from './pages/Cadastro';
import { Login } from './pages/Login';
import { Inicio } from './pages/Inicio';
import { Explorar } from './pages/Explorar';
import { Beleza } from './pages/Beleza';
import { PerfilMarina } from './pages/PerfilMarina';
import { Opcoes } from './pages/Opcoes';

function App() {
  const [telaAtiva, setTelaAtiva] = useState('explorar');

  return (
    <div>
      {telaAtiva === 'cadastro' && (
        <Cadastro irParaLogin={() => setTelaAtiva('login')} />
      )}

      {telaAtiva === 'login' && (
        <Login irParaCadastro={() => setTelaAtiva('cadastro')} />
      )}

      {telaAtiva === 'inicio' && (
        <Inicio irParaTela={setTelaAtiva} />
      )}

      {telaAtiva === 'explorar' && (
        <Explorar irParaTela={setTelaAtiva} />
      )}

      {telaAtiva === 'beleza' && (
        <Beleza irParaTela={setTelaAtiva} />
      )}

      {telaAtiva === 'perfil' && (
        <PerfilMarina irParaTela={setTelaAtiva} />
      )}

      {telaAtiva === 'opcoes' && (
        <Opcoes irParaTela={setTelaAtiva} />
      )}
    </div>
  );
}

export default App;