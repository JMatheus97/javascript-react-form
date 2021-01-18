import React, { Component } from 'react';


class Input extends Component {
    static defaultProps = {
        type: "text",
        id: "name",
        placeholder: "Name",
        value: "",
        onChange: {}
    }
    constructor(props) {
        super(props);
    }
    render() {
        const { props } = this;
        return (
            <input type={props.type} id={props.id} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
        )
    }
}

export default Input;