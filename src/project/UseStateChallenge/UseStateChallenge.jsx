import { useState } from "react"

export const UseStateChallenge = () => {

    const[count, setCount] = useState(0);
    const[value, setValue] = useState(1);

    const getValue = (value) => {
            setValue(Number(value));
    }
    
    const handleIncrement = () => {
            setCount(count+value);
    }

    const handleDecrement = () => {
            setCount(count-value);
    }

    const handleReset = () => {
            setCount(0);
    }

    return(
        <>
        <center>
            <h1>Use State Challenge</h1>
            <h2>Count: {count}</h2><br />
            <input type="text" value={value} onChange={(e) => getValue(e.target.value)}/><br />
            <button onClick={handleIncrement} disabled={count >= 100}>Increment</button>
            <button onClick={handleDecrement} disabled={count <= 0}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </center>
        </>
    );


}