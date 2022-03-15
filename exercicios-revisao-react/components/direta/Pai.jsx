import Filho from './Filho';

export default function Pai(props) {
  return (
    <>
      <h1>Família {props.familia}</h1>
      <Filho nome='Gustavo' familia={props.familia} />
      <Filho nome='Rafael' familia={props.familia} />
      <Filho {...props} nome='Pedro' familia={props.familia} />
      {/* Assim é o mais comum ^, pois nome e familia é sobrescrevido*/}
      <Filho nome='Pedro' familia2={props.familia} {...props} />
      <Filho {...props} />
    </>
  );
}
