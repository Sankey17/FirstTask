import React, { Component } from 'react'
import Condition from "./Condition";
import Condition1 from "./Condition1";


export default class If extends Component {
    state={
        isLoggedIn:false
    };

    clickLogin = ()=>{
        this.setState({isLoggedIn:true});
    };

    clickLogout = () =>{
        this.setState({isLoggedIn:false});
    };
     render() {
        const isLoggedIn = this.state.isLoggedIn;
        if(isLoggedIn){
            return <Condition1 clickData={this.clickLogout}/>;
            }
            else
            return<Condition clickData={this.clickLogin}/>;
        }
        
    }

