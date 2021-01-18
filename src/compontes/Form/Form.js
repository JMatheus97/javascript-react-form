import React, { Component } from 'react';

import './styles.css';

import Input from '../Input/Input';
import Button from '../Button/Button';


class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pessoa: {
                nome: "",
                idade: 0,
                endereco: "",
                cidade: ""
            }
        }
        this.hundleChange = this.hundleChange.bind(this);
        this.hundleSubmit = this.hundleSubmit.bind(this);
    }

    hundleChange(event) {
        if (event.target.id === "name") {
            this.setState({
                ...this.state.pessoa.nome = event.target.value
            })
        } else if (event.target.id === "idade") {
            this.setState({
                ...this.state.pessoa.idade = event.target.value
            })
        }  else if (event.target.id === "endereco") {
            this.setState({
                ...this.state.pessoa.endereco = event.target.value
            })
        } else if (event.target.id === "cidade") {
            this.setState({
                ...this.state.pessoa.cidade = event.target.value
            })
        }
    }

    hundleSubmit() {
      localStorage.setItem("lista_pessoas", JSON.stringify(this.state.pessoa))
      console.log('Salva com sucesso.');
    }

   
    render() {
        const { pessoa } = this.state;
        return (
            <form>
                <Input type="text" value={pessoa.nome} onChange={this.hundleChange} />
                <Input type="number" id="idade" placeholder="Idade" value={pessoa.idade} onChange={this.hundleChange} />
                <Input id="endereco" placeholder="Endereço" value={pessoa.endereco} onChange={this.hundleChange} />
                <Input id="cidade" placeholder="Cidade" value={pessoa.cidade} onChange={this.hundleChange} />
                <Button onClick={this.hundleSubmit.bind(this)} />
            </form>

        )
    }
}

export default Form;