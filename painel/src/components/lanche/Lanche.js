import React from 'react';
import LancheStyle from './LancheStyle';

class Lanche extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            lanche: 'Mc1',
            user: ''
        }
    }

    atualizarUser = evento => {
        this.setState({
            user: evento.target.value
        });
    }

    atualizarLanche = evento => {
        this.setState({
            lanche: evento.target.value
        });
    }

    fazerPedido = () => {
        fetch('http://localhost:5000/lanche/novo', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers:{
                "Content-Type": "application/json"
            }
        }).then(resposta => resposta.json()).then(dados => {
            console.log(dados);
            this.props.clique();
        });
    }

  render() {
    console.log(this.state);
    return (
        <section style={LancheStyle.section}>
            <h1>Faça aqui seu pedido!</h1>
            <select onChange={this.atualizarLanche}>
                <option value="Mc1">Mc1</option>
                <option value="McOutro">McOutro</option>
                <option value="McMcMc">McMcMc</option>
            </select>
            <input onChange={this.atualizarUser} value={this.state.user} type="text" placeholder="Digite seu nome" />
            <button onClick={this.fazerPedido}>Fazer Pedido</button>
        </section>
    );
  }
}

export default Lanche;