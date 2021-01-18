import React, { Component } from 'react';

class Button extends Component{
    static defaultProps ={
        onClick: {},
        type: "button",
        label: "Salvar"
    }
    constructor(props){
        super(props);
        this.onValue = this.onValue.bind(this);
    }

    onValue = () =>{
        this.props.onClick();
    }
    render(){
        const { props } = this;
        return(
            <button type={props.type} onClick={() => this.onValue()}>{props.label}</button>
        );
    }
}

export default Button;