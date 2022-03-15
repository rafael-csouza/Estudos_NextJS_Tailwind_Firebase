export default function SomaUm(props) {
  //   props.numero++; - NAO FUNCIONA PROPS É SOMENTE LEITURA
  return (
    <div>
      {/* <h1>{props.numero}</h1> */}
      <h1>{props.numero + 1}</h1>
      {/* Assim funciona pois JS adicionou +1 dps da leitura */}
    </div>
  );
}
