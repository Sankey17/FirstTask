import {useState} from 'react'

export default function useCustom() {
    const [count,setCount] = useState(0);
    const handleIncrement1= () =>{
        setCount(count + 1);
    };
    return{ 
           count
           ,handleIncrement1
        }; 
    
}
