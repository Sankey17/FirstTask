import React ,{Component} from 'react';
import Sanket from './Sanket';

export default class Hoc extends Component{
    render(){
        return(
            <div  className="container my-3">
            <Sanket/>
            </div>
        );
    }
}