import React from 'react';
import TextForm from './TextForm';
import ExtraProp from './ExtraProp';
import Heading from "./Heading";
import Para from "./Para";
import List from "./List";
import Hoc from "./Hoc";
import Hooks from "./Hooks";
import Cycle from "./Cycle";
import Event from "./Event";
import Logical from "./Logical";
import If from "./If";
import Eventf from "./Eventf";
import useCustom from "./Custom";
import ExtraState from './ExtraState';

export default function Home() {
    const data = useCustom();
    return (
        <>
            <TextForm heading='Enter Your data' />
            <Heading />
            <Para />
            <Event />
            <Eventf name="Patel" />
            <List name="Sanket" />
            <Hoc />
            <Cycle />
            <Hooks />
            <ExtraState title='HY Dude!' />
            <h1 className="container my-3">Number:{data.count}</h1>
            <button className="btn btn-primary mx-1" type="button" onClick={data.handleIncrement1}>Increment</button><br />
            <ExtraProp name='Sanket' />
            <If consumer={false} /><br />
            <Logical primeMember={true} /><br />
        </>
    );
}
