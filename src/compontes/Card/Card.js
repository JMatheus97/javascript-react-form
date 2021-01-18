import React, { Component } from 'react';

import './styles.css';

import Form from '../Form/Form';
import Table from '../Table/Table';

class Card extends Component {
    render() {
        return (
            <div className="card">
                <header>
                    <h1>Formulário de usuário</h1>
                    <hr/>
                </header>
                <main>
                    <Form />
                    <Table/>
                </main>
                
            </div>
        );
    }
}

export default Card;