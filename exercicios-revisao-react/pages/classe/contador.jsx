import { Component } from 'react';
import Contador from '../../components/Contador';

export default class ContadorPage extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <h1>Contador usando Classe</h1>
        <Contador valorInicial={100} passo={2} />
        <Contador />
      </div>
    );
  }
}
