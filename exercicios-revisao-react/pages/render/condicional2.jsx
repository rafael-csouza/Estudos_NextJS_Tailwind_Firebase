import If from '../../components/If';

export default function condicional2() {
  const numero = 5;
  return (
    <div>
      <If teste={numero % 2 === 0}>
        <h1 style={{ backgroundColor: 'red' }}>
          O primeiro número {numero} é par
        </h1>
      </If>
      <If teste={numero % 2 === 1}>
        <h1 style={{ backgroundColor: 'blue' }}>
          O segundo número {numero} é ímpar
        </h1>
      </If>
    </div>
  );
}
