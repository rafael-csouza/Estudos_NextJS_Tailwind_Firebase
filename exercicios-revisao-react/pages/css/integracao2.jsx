import estilos from './integracao2.module.css';

export default function integracao2(props) {
  return (
    <div id={estilos.integracao2}>
      <div className={estilos.laranja}>Texto laranja #01</div>
      <div className={estilos.rosa}>Texto rosa #02</div>
      <div className={estilos.marrom}>Texto marrom #03</div>
    </div>
  );
}
