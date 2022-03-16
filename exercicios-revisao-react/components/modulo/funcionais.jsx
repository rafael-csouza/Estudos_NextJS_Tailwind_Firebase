export function Comp1(props) {
  return (
    <>
      <h2>Componete #01</h2>
      <h3>Modo: {props.titulo}</h3>
    </>
  );
}

export const Comp2 = function (props) {
  return (
    <>
      <h2>Componete #02</h2>
      <h3>Modo: {props.titulo}</h3>
    </>
  );
};

export default function Comp3(props) {
  return (
    <>
      <h2>Componete #03</h2>
      <h3>Modo: {props.titulo}</h3>
    </>
  );
}

const Comp4 = (props) => (
  <>
    <h2>Componete #04</h2>
    <h3>Modo: {props.titulo}</h3>
  </>
);

const Comp5 = ({ titulo = 'Rafael' }) => (
  <>
    <h2>Componete #05</h2>
    <h3>Modo: {titulo}</h3>
  </>
);

export { Comp4, Comp5 };
