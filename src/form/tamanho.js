import React from 'react'
import { render } from 'react-dom'
 
var App = React.createClass({
  render:function(){
    return(
      <div>
        Formulario de tamanho da sua pizza, possuimos Pequena, Média e Grande, digite a desejada?
      </div>
    );
  }
});

var FormComp = React.createClass({
 
 
    getInitialState: function () {
      return {ltamanho: '',ftamanho:'',Tamanho:''};
    },
 
    handleFNameChange:function(event){
      this.setState({ftamanho: event.target.value});
    },
 
    handleLNameChange:function(event){
      this.setState({ltamanho: event.target.value});
    },
 
    handleClick:function(){
        var fullmassa = this.state.fmassa + ' ' + this.state.lmassa;
        this.setState({tamanho: Pmg});
    },
 
    render:function(){
        return(
            <div>
                <h2>Formulario de tamanho de massa de pizza</h2>
                <hr />
                <label>Escreva um tamanho de massa de pizza? no final teremos uma recomendacao para voce </label>
                <input type="text" value = {this.state.f} onChange={this.handleFmassaChange}  />
                <br />
                <label>Se acaso escolheu o tamanho M, te daremos quatro por cento de desconto </label>
                <input type="text" value = {this.state.lrecomendacao} onChange={this.handleLrecomendacaoChange}  />
                <br />
                <input type="button" onClick={this.handleClick} value="Submit" />
                <hr />
            </div>
        );
    }
})
 
render((
    <FormComp />
    ),document.getElementById('app'))