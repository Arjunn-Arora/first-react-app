import { useState } from "react";
import "../../index.css"

const State = () => {
    let [count, setCount] = useState(0)
      const IncrementValue = () => {
        setCount(() => count + 1)
      }

    return(
        <>
            <section className="container">
            <h1>{count}</h1>
            <button onClick={IncrementValue}>Increment</button>
            </section>
        </>
    );
}

export default State