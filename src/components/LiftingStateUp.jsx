import { useState } from "react";

export const LiftingStateUp = () => {
    const [input, setInputValue] = useState("");
    return(
        <>
            <InputComponent input={input} setInputValue={setInputValue}/>
            <DisplayComponent input={input} />
        </>
    );
}

const InputComponent = (props) => {
    return(
        <>
        <h1>Input Component:</h1>
        <input type="text" name="name" id="name" placeholder="Enter Value" value={props.input} autoComplete="off"
            onChange={(e) => props.setInputValue(e.target.value)}
        />
        </>
    );
}

const DisplayComponent = (props) =>{
    return(
        <>
            <h1>Display Component:</h1>
            <h2>Value is : {props.input}</h2>
        </>
    );
}