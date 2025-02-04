import { useState } from "react";
import '../App.css'; 

function Counter() {
    const [counter, setCounter] = useState(0);

    return (
        <div className="counter-container">
            <h1>{counter}</h1>
            <button className="counter-button increase" onClick={() => setCounter(counter + 1)}>+</button>
            <button className="counter-button decrease" onClick={() => counter > 0 && setCounter(counter - 1)}>-</button>
            <button className="counter-button reset" onClick={() => setCounter(0)}>Reset</button>
        </div>
    );
}

export default Counter;
