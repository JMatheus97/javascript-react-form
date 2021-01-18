import React, { Component } from 'react';

import './style.css';

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pessoa: [JSON.parse(localStorage.getItem("lista_pessoas"))]
        }
    }


    render() {
        const { pessoa } = this.state;
        console.log(pessoa)

        return (
            <table>
                <thead>
                    <tr>
                        <td>Nome</td>
                        <td>Idade</td>
                        <td>Endereço</td>
                        <td>Cidade</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        pessoa.map((p, index) => 
                            <tr key={index}>
                                <td>{p.nome}</td>
                                <td>{p.idade}</td>
                                <td>{p.endereco}</td>
                                <td>{p.cidade}</td>
                            </tr>
                        )
                    }

                </tbody>
            </table >
        );
    }
}

export default Table;