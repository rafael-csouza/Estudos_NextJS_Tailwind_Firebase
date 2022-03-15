import Estilo from '../../components/Estilo';

export default function usandoEstilo(props) {
  return (
    <div>
      <Estilo numero={3} color='#fff' />
      <Estilo numero={-3} color='#2df' direita />
    </div>
  );
}
