/*
Exercicio:
<div>
    <span>1,</span>
    ...
    <span>10,</span>
</div>
*/

function gerarLista(final = 10) {
  const arrayDosNumeros = [];
  for (var i = 1; i <= final; i++) {
    arrayDosNumeros.push(<span key={i}>{i},</span>);
  }
  return arrayDosNumeros;
}
export default function lista1() {
  return (
    <div>
      <div>{gerarLista(5)}</div>
      <div>{gerarLista()}</div>
      <div>{gerarLista(20)}</div>
      <div>{gerarLista(30)}</div>
    </div>
  );
}
