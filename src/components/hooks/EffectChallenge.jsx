import { useEffect, useState } from "react";

export const EffectChallenge = () => {

    const [count, setCount] = useState(0);
    const [value, setValue] = useState("");
    
    const handleIncrement = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        console.log(value);
        document.title = `Count: ${count}`;
    }, [value, count])
    
    return(
        <>
            <h1>UseEffect Challenge</h1>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment Count</button>
            <br />
            <input type="text" name="inputText" id="inputText" value={value} onChange={(e) => setValue(e.target.value)}/>
        </>
    );
}