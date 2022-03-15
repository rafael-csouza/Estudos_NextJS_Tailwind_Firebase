import TabuleiroCasas from '../../components/TabuleiroCasas';
import tabuleiro from './tabuleiro.module.css';

function gerarCasas(casas = 8, colunaPar = 1) {
  const arrayDosNumeros = [];
  for (var i = 1; i <= casas; i++) {
    arrayDosNumeros.push(<TabuleiroCasas somaCasas={i + colunaPar} />);
  }
  return arrayDosNumeros;
}

export default function index(props) {
  return (
    <div className={tabuleiro.fundo}>
      <div>{gerarCasas(8, 1)}</div>
      <div>{gerarCasas(8, 2)}</div>
      <div>{gerarCasas(8, 3)}</div>
      <div>{gerarCasas(8, 4)}</div>
      <div>{gerarCasas(8, 5)}</div>
      <div>{gerarCasas(8, 6)}</div>
      <div>{gerarCasas(8, 7)}</div>
      <div>{gerarCasas(8, 8)}</div>
    </div>
  );
}
