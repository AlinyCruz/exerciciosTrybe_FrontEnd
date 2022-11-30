// import PropTypes from 'prop-types'
import React, { Component } from 'react'

class App extends Component {

  eventoClick1() {
    console.log('Clicou no botão 1!');
  }
  eventoClick2() {
    console.log('Clicou no botão 2!!');
  }
  eventoClick3() {
    console.log('Clicou no botão 3!!!');
  }
  
  // Assim:

  constructor() {
    super()
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.eventoClick4 = this.eventoClick4.bind(this)
    this.state = {
      numeroDeCliques: 0
    }
  }
  eventoClick4() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

  // Ou assim, sem o 'bind' e com Arrow function:
  
  // eventoClick4 = () => {
  //   console.log(this);
  // }

  render() {
    return (
      <>
      <button onClick={this.eventoClick1}>Botão 01</button>
      <button onClick={this.eventoClick2}>Botão 02</button>
      <button onClick={this.eventoClick3}>Botão 03</button>
      <button onClick={this.eventoClick4}>{this.state.numeroDeCliques}</button>
      </>
    )
  }
}

export default App;
