import Pai from '../../components/direta/Pai';

export default function direta() {
  return (
    <div
      style={{
        display: 'grid',
        height: '100vh',
        justifyItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
      }}
    >
      <Pai nome='Isabela' familia='Albuquerque' />
    </div>
  );
}
