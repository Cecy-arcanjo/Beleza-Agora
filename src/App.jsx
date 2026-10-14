import { useState } from 'react'
import './App.css'
import { Cadastro } from './pages/Cadastro';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Cadastro />
    </div>
    </>
  )
}

export default App
