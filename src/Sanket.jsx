import React, { Component } from 'react';

export default class sanket extends Component {
    state={
        rollno:1111
    }
    render() {
        return (
            <div  className="container my-3">
                <h3>rollno:{this.state.rollno}</h3>
            </div>
        );
    }
}