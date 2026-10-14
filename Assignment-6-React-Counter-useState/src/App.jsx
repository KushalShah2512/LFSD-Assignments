import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="app">
            <div className="counter">
                <h1>React Counter</h1>

                <h2>{count}</h2>

                <div className="buttons">
                    <button onClick={() => setCount(count - 1)}>
                        -
                    </button>

                    <button onClick={() => setCount(0)}>
                        Reset
                    </button>

                    <button onClick={() => setCount(count + 1)}>
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;