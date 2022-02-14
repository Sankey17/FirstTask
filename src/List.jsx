import React from "react";

const List = props =>{
    return (
        <div  className="container my-3">
        <h3>Hello, {props.name}</h3>
        <ol>
            <li>Sanket</li>
            <li>Princy</li>
            <li>Jinal</li>
            <li>Naimish</li>
        </ol>
        </div>
    );
};

export default List;