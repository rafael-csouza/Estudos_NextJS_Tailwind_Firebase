//JSX
export default function jsx2() {
  const array = [
    <li key='1'>Paulo</li>,
    <li key='2'>Ana</li>,
    <li key='3'>Pedro</li>,
  ];
  const conteudo = (
    <div>
      <h1>JSX #02</h1>
      {array}
    </div>
  );
  return conteudo;
}
