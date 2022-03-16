export default function NumeroDisplay(props) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50px',
        width: '50px',
        margin: '20px',
        borderRadius: '100px',
        backgroundColor: '#222',
        color: '#fff',
        fontSize: '1rem',
      }}
    >
      {props.numero}
    </div>
  );
}
