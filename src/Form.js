import React from 'react';
import Header from './Header';
import { useState } from "react";
import { useForm } from "react-hook-form";

function Form() {
    const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
    return (
        <div className='container'>
            <form onSubmit={handleSubmit((data) => setResult(JSON.stringify(data)))}>
                <Header />
                <input className='mx-2 my-2' {...register("firstName")} placeholder="First name" /><br/>
                <input className='mx-2 my-2' {...register("lastName")} placeholder="Last name" /><br/>
                <select className='mx-2 my-2' {...register("category")}>
                    <option value="">Select...</option>
                    <option value="A">Category A</option>
                    <option value="B">Category B</option>
                </select>
                <p>{result}</p>
                <input className="btn btn-outline-success mx-2" type="submit" />
            </form>
        </div>
    );
}

export default Form;
