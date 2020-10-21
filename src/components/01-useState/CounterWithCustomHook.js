import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import './CounterApp.css';

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter();

    return (
        <div>
            <h1>Counter with hook: {state}</h1>
            <hr></hr>
            <button onClick={() => increment(1)} className="btn">+ 1</button>
            <button onClick={reset} className="btn">Reset</button>
            <button onClick={() => decrement(2)} className="btn">- 1</button>
        </div>
    )
}
