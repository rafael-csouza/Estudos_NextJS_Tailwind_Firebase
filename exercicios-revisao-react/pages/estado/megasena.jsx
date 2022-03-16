import { useEffect, useState } from 'react';
import NumeroDisplay from '../../components/NumeroDisplay';
import { mega } from '../../function/mega';

export default function Megasena() {
  var [numeros, setNumeros] = useState([]);
  var [qtdNumeros, setQtdNumeros] = useState(6);

  useEffect(() => {
    setNumeros(mega());
  }, []);

  function renderizarNumeros() {
    return numeros.map((numero) => (
      <NumeroDisplay key={numero} numero={numero} />
    ));
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: '1vh',
        backgroundColor: '#777',
        minHeight: '100vh',
      }}
    >
      <h1>Mega-Sena</h1>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {renderizarNumeros()}
      </div>

      <button
        style={{ width: '200px' }}
        onClick={() => setNumeros(mega(qtdNumeros))}
      >
        Gerar Aposta
      </button>

      <h3>
        Numeros a Gerar:{' '}
        <input
          type='number'
          min={6}
          max={15}
          value={qtdNumeros}
          onChange={(ev) => setQtdNumeros(+ev.target.value)}
        />
      </h3>

      <button
        style={{ width: '200px' }}
        onClick={() => setQtdNumeros(qtdNumeros > 6 ? +qtdNumeros - 1 : 6)}
      >
        -
      </button>
      <button
        style={{ width: '200px' }}
        onClick={() => setQtdNumeros(qtdNumeros < 15 ? +qtdNumeros + 1 : 15)}
      >
        +
      </button>
      <button style={{ width: '200px' }} onClick={() => setQtdNumeros(6)}>
        Resetar
      </button>

      <div style={{ gap: '6px', display: 'grid', margin: '12px' }}>
        <h4>Preços (16/03/2022)</h4>
        <div>06 números (R$ 4,50)</div>
        <div>07 números (R$ 31,50)</div>
        <div>08 números (R$ 126,00)</div>
        <div>09 números (R$ 378,00)</div>
        <div>10 números (R$ 945,00)</div>
        <div>11 números (R$ 2.079,00)</div>
        <div>12 números (R$ 4.158,00)</div>
        <div>13 números (R$ 7.722,00)</div>
        <div>14 números (R$ 13.513,50)</div>
        <div>15 números (R$ 22.522,50)</div>
      </div>
    </div>
  );
}
