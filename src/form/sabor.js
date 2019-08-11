import React from 'react'
import { render } from 'react-dom'
 
var App = React.createClass({
  render:function(){
    return(
      <div>
        Formulario de sabores do cardapio de pizza
      </div>
    );
  }
});

var FormComp = React.createClass({
 
 
    getInitialState: function () {
      return {lsabor: '',fsabor:'',Sabor:''};
    },
 
    handleFsaborChange:function(event){
      this.setState({fsabor: event.target.value});
    },
 
    handleLNameChange:function(event){
      this.setState({lsabor: event.target.value});
    },
 
    handleClick:function(){
        var fullsabor = this.state.fsabor + ' ' + this.state.lsabor;
        this.setState({massa:sabores});
    },
 
    render:function(){
        return(
            <div>
                <h2>Formulario de tipos de sabores de pizza</h2>
                <hr />
                <label>Escreva um sabor de pizza? No momento temos, Bolonhesa, Portuguesa e Calabresa no final teremos uma recomendacao para voce </label>
                <input type="text" value = {this.state.f} onChange={this.handleFmassaChange}  />
                <br />
                <label>Se acaso escolheu o sabor de Portuguesa, lhe presentearemos com uma mini pizza doce de chgocolate</label>
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