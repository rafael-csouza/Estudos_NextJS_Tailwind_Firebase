import { useState } from 'react';
import NumeroDisplay from '../../components/NumeroDisplay';

export default function Contador(props) {
  const [contador, setContador] = useState(0);
  const decremento = () => setContador(contador - 1);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: '1vh',
      }}
    >
      <h1>Contador</h1>
      <h3>Valor: {contador}</h3>
      <NumeroDisplay numero={contador} />
      <button style={{ width: '200px' }} onClick={decremento}>
        -
      </button>
      <button
        style={{ width: '200px' }}
        onClick={() => setContador(contador + 1)}
      >
        +
      </button>
      <button style={{ width: '200px' }} onClick={() => setContador(0)}>
        Resetar
      </button>
      {/* <input
        style={{ width: '200px' }}
        type={'text'}
        value={contador}
        onChange={(e) => setContador(e.target.value)}
      /> */}
    </div>
  );
}
