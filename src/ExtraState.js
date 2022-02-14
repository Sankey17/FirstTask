import React, {useState} from 'react';

export default function ExtraState(props) {
    const ab = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        // this.setState({title:"Sanket"});
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }


    // state={
    //     title:this.props.title
    // }
    const [text, setText] = useState(''); 
    return(
        <>
        
        <h2>Hello  {props.title}</h2>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="2"></textarea>
            <button className="btn btn-primary mx-1" onClick={ab}>Click</button>
        </>
    )
    
}
