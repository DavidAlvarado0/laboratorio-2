
import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import UserInfo from './UserInfo'; // Importar componente con props

function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div className="App">
      <Header />
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
      <UserInfo nombre="David Alvardo" edad={25} />
    </div>
  );
}

export default App;
