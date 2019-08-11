import React from 'react'
import { render } from 'react-dom'
 
var App = React.createClass({
  render:function(){
    return(
      <div>
        Formulario de massa
      </div>
    );
  }
});

var FormComp = React.createClass({
 
 
    getInitialState: function () {
      return {lmassa: '',fmassa:'',Massa:''};
    },
 
    handleFNameChange:function(event){
      this.setState({fmassa: event.target.value});
    },
 
    handleLNameChange:function(event){
      this.setState({lmassa: event.target.value});
    },
 
    handleClick:function(){
        var fullmassa = this.state.fmassa + ' ' + this.state.lmassa;
        this.setState({massa:nomedamassa});
    },
 
    render:function(){
        return(
            <div>
                <h2>Formulario de tipos de massa de pizza</h2>
                <hr />
                <label>Escreva um tipo de massa de pizza? no final teremos uma recomendacao para voce </label>
                <input type="text" value = {this.state.f} onChange={this.handleFmassaChange}  />
                <br />
                <label>Se acaso escolheu a massa ceciliana, te daremos cinco por cento de</label>
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