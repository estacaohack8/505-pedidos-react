import React from 'react';
import PedidosStyle from './PedidosStyle';

class Pedidos extends React.Component {
  render() {
    return (
       <section style={PedidosStyle.section}>
        <h1>Lista de Pedidos</h1>
        {this.props.lista.map((item, pos) => {
          return <p key={pos}>{`${item.user} - ${item.lanche}`}</p>
        })}
       </section>
    );
  }
}

export default Pedidos;