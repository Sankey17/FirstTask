import React,{useState,useEffect} from 'react'

export default function Useff() {
    const[count,setCount]= useState(0);
    const [count1, setCount1] = useState(40);


    const handleIncrement=() =>{
        setCount(count+2);
    };

    const handleDecrement = () => {
        setCount1(count1 - 2);
    };
    useEffect(() => {
        console.log("Called");
        return () => {
           // cleanup
        }
    }, [count]);


    return (
        <div  className="container my-3">
            <h1>Count Up:{count}</h1>
            <button type="button" onClick={handleIncrement}>Inecrease</button>

            <h1>Count down:{count1}</h1>
            <button type="button" onClick={handleDecrement}>Decrease</button>

        </div>
    )
}
