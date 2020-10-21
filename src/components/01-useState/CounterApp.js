import React, { useState } from 'react'
import './CounterApp.css'

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20
    });

    const {counter1, counter2} = state;

    return (
        <div>
            <h1>Counter {counter1}</h1>
            <h1>Counter {counter2}</h1>
            <button
                className="btn btn-primary"
                onClick={() => {
                    setState(prev => ({
                        ...prev,
                        counter1: counter1 + 1
                    }));
                }}
            >+1</button>
        </div>
    )
}
