import React, { Component } from 'react'
import Condition from './Condition';

export default class Logical extends Component {
    render() {
        const primeMember = this.props.primeMember;
        return (
            <div  className="container my-3">
                <h3>Logical operator</h3>
                {/* {primeMember && <Condition/>} */}
            </div>
        );
    }
}
