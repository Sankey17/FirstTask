import React, { Component } from 'react'

export default class  extends Component {
    render() {
        return (
            <div  className="container my-3">
               <h4>Hello </h4>
                <button className="btn btn-primary mx-1" onClick={this.props.clickData}>Login</button>
               <button className="btn btn-primary mx-1">Signup</button> 
            </div>
        )
    }
}
