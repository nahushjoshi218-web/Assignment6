
import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    function inc() {
        setCount(count + 1);
    }

    function dec() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div>
            <h2>Counter App</h2>

            <h1>{count}</h1>

            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default App;