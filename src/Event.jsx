import React, { Component } from 'react'

export default class Event extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"Sanket",
            id:1
        };
    }

    handleClick = (id) => {
        console.log(id);
    };
    handleClickArg = () =>{
        this.handleClick(this.state.id);
    };
    render() {
        return (
            <div  className="container my-3">
                <h1>Hello!! {this.state.name}</h1>
                <button className="btn btn-primary mx-1" onClick={this.handleClickArg}>click</button>
            </div>
        );
    }
}
