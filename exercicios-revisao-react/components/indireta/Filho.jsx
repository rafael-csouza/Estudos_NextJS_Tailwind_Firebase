export default function Filho(props) {
  console.log(props.funcao);
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1>Filho</h1>
      <button onClick={props.funcao}>props.funcao</button>
      <hr />
      <button onClick={() => props.funcao('Passei no ENEM!', true, 10)}>
        props.funcao(param1, param2, param3)
      </button>
    </div>
  );
}
