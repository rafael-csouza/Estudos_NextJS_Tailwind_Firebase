import { Component } from 'react';

export default class Contador extends Component {
  state = {
    numero: this.props.valorInicial ?? 0,
    passo: this.props.passo ?? 1,
  };

  inc() {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  }

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  renderForm() {
    <>
      Editar passo:
      <input
        type='numer'
        min={1}
        max={1000}
        value={this.setState.passo}
        onChange={(ev) => this.setState({ passo: +ev.target.value })}
      />
    </>;
  }
  render() {
    return (
      <div>
        <h2>Valor Inicial: {this.props.valorInicial}</h2>
        <h2>Numero: {this.state.numero}</h2>
        <h2>Passo: {this.state.passo}</h2>
        {this.renderForm}
        <div style={{ marginTop: '16px' }}>
          <button onClick={() => this.inc()}>Incrementar Numero 2</button>
          <button onClick={this.dec}>Decrementar Numero 2</button>
        </div>
        <hr />
      </div>
    );
  }
}

// export default Contador
