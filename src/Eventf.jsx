import React from 'react';


export default function Eventf(props) {
    function handleClick(){
        console.log("Button Clicked");
    }
    return (
        <div  className="container my-3">
            <h2>Sanket {props.name}</h2>
            <button className="btn btn-primary mx-1" onClick={handleClick}>Send</button>
        </div>
    )
}

