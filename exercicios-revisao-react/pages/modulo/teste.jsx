import Padrao, {
  Comp1 as Blabla,
  Comp2,
  Comp4,
  Comp5,
} from '../../components/modulo/funcionais';
export default function teste(props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Modos de export - Sistema Modulo ECMAscript</h1>
      <Blabla titulo='export function Comp1(props) {' />
      <Comp2 titulo='export const Comp2 = function (props) { ' />
      <Padrao titulo='export default function Comp3(props) {' />
      <Comp4 titulo='export const Comp4 = (props) => (' />
      <Comp5 titulo='export const Comp5 = ({ titulo }) => (' />
    </div>
  );
}
