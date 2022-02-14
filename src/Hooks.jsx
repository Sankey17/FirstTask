import React,{useState} from 'react'

export default function Hooks() {
    const [name, setName] = useState("Sanket");
    const [rollno, setRollno] = useState("111");
        
    //const name=nameStateVariavle[0];
    //const setName = nameStateVariavle[1];
    const handleClick = () =>{
        setName("Sanket Kumbhani");
        setRollno("1111");
        
    }

    return (
        <div  className="container my-3">
           <h1>Name: {name}</h1>
           <h2>Rollno:{rollno}</h2> 
           <button className="btn btn-primary mx-1" type="button" onClick={handleClick}>change</button>
        </div>
    )
}
