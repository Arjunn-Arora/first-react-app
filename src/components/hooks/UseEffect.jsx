import { useEffect, useState } from "react";
import "./UseEffect.css"

export const UseEffect = () => {

    const [count, setCount] = useState(0);

        const handleIncrement = () => {
            setCount(count +1);
        }


    useEffect(() => {
        console.log("Count Value: ", count);
    }, [count]);

    return(
        <>
            <div className="container">
                <h1>UseEffect Hook</h1>
                <h2>Count Value = {count}</h2>
                <button onClick={handleIncrement}>Increment</button>
            </div>
        </>
    );
}