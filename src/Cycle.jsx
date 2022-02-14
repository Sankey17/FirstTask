// import React, { Component } from 'react'
import React from 'react'

class Cycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hello: "Sanket!!" };
        this.changeState = this.changeState.bind(this)
    }
    render() {
        return (
            <div  className="container my-3">
                <h1>ReactJS</h1>
                <h3>Hello {this.state.hello}</h3>
                <button className="btn btn-primary mx-1" onClick={this.changeState}>Click Here!</button>
            </div>
        );
    }
    componentWillMount() {
        console.log('Component Will MOUNT!')
        
    }
    componentDidMount() {
        console.log('Component Did MOUNT!')
        
    }
    changeState() {
        this.setState({ hello: "I'M Sanket and i Study in K.S.SCHOOL OF BUSSINESS MANAGEMENT" });
    }
    componentWillReceiveProps(newProps) {
        console.log('Component Will Recieve Props!')
        
    }
    shouldComponentUpdate(newProps, newState) {
       return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Component Will UPDATE!');
       
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component Did UPDATE!')
       
    }
    componentWillUnmount() {
        console.log('Component Will UNMOUNT!')
    }
}
export default Cycle;




/*export default class Cycle extends Component {
    constructor(props){
        super(props);
        console.log("Cycle-Constructor Called");
        console.log(props);
    }
    render() {
        return (
            <div>
                <h1>Life Cycle</h1>
            </div>
        )
    }
}*/