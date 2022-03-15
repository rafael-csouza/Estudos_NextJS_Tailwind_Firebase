export default function TabuleiroCasas(props) {
  return (
    <div
      style={{
        backgroundColor: 'black',
        width: '100px',
        height: '100px',
        backgroundColor: props.somaCasas % 2 == 0 ? 'white' : 'black',
      }}
    ></div>
  );
}
