import React from 'react';
import Lanche from './components/lanche/Lanche';
import Pedidos from './components/pedidos/Pedidos';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pedidos: []
    }
  }

  atualizarPedidos = () => {
    fetch('http://localhost:5000/lanches').then(resposta => resposta.json()).then(dados => this.setState({
      pedidos: dados.lanches
    }));
  }

  componentDidMount = () =>{
    this.atualizarPedidos();  
  }

  render() {
    return (
      <div>
        <Lanche clique={this.atualizarPedidos}/>
        <Pedidos lista={this.state.pedidos}/>
      </div>
    );
  }
}

export default App;