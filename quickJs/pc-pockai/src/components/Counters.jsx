import React, { useState } from "react";

const Counters = () => {
    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter + 1);
    };
    const decrement = () => {
        setCounter(counter - 1);
    };
    return (
        <>
            <p>{counter}</p>
            <div>
                <button onClick={increment}>increment</button>
                <button onClick={decrement}>decement</button>
                <button onClick={() => setCounter(0)}>reset</button>
            </div>
        </>
    )
}

export default Counters