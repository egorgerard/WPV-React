import React from "react";
import "./Person.css"

const person = (props)=>{

    const style = {
        backgroundColor:"red",
        fontWeight:"bold"
    }

    return(
        <div style={style} className="Person" onClick={props.click}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Beruf: {props.children}</p>
            <input onChange={props.change} value={props.name}/>
        </div>
    )
}

export default person;