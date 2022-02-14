import React, { Component } from 'react'

export default class Uncont extends Component {
    constructor(props){
        super(props);
        //this.state={
          //  value=""
        //}
        this.textInput=React.createRef();
    }
    componentDidMount=()=>{
        this.textInput.current.focus();
    };

    render() {
        return (
            <div  className="container my-3">
                <form>
                <br/>
                    Name: <input type="text"/>
                    <br/>
                    <br/>
                    Possword: <input type="text" ref={this.textInput}/>
                    <br/>
                    <br/>
                    Address: <input type="text"/>
                </form>
            </div>
        )
    }
}
