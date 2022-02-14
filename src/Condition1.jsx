import React, { Component } from 'react'

export default class  extends Component {
    render() {
        return (
            <div  className="container my-3">
                <h1>Hello, Students</h1>
                <button className="btn btn-primary mx-1" onClick={this.props.clickData}>Logout</button>
            </div>
        )
    }
}
