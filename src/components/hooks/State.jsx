import { useState } from "react";
import "../../index.css"

const State = () => {
    const [count, setCount] = useState(0)
      const IncrementValue = () => {
        setCount(() => count + 1)
      }

    return(
        <>
            <section className="container">
              <h1>Use State Hook</h1>
            <h1>Count: {count}</h1>
            <button onClick={IncrementValue}>Increment</button>
            <p>Click on Button to Increment the Count!!</p>
            </section>
        </>
    );
}

export default State