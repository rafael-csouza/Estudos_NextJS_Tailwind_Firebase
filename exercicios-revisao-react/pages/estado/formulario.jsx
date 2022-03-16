import { useState } from 'react';

export default function Formulario(props) {
  const [valor, setValor] = useState('Inicial');

  function alterarInput() {
    setValor(valor + ' !!!');
    console.log(valor);
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: '2rem',
      }}
    >
      <h1>Valor: {valor}</h1>
      <input
        type='text'
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <button onClick={alterarInput}>Adicionar: !!!</button>
    </div>
  );
}
