function acao1() {
  console.log('acao1');
}

export default function botao(props) {
  function acao2() {
    console.log('acao2');
  }
  function acao5(evento) {
    console.log(evento);
    console.log('Usou shift? ' + evento.shiftKey);
    console.log('Usou control? ' + evento.ctrlKey);
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '20px',
        padding: '20px',
        rowGap: '20px',
        alignItems: 'center',
        border: '5px solid red',
      }}
    >
      <button onClick={acao1}>Click #01</button>
      <button onClick={acao2}>Click #02</button>
      <button
        onClick={function acao3() {
          console.log('acao3');
        }}
      >
        Click #03
      </button>
      <button onClick={() => console.log('acao4')}>Click #04</button>
      <button onClick={acao5}>Click #05</button>
      <button onClick={(e) => acao5(e.altKey)}>Click #06</button>
      <input type='text' onChange={(e) => console.log(e.target.value)} />
    </div>
  );
}
