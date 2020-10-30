import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { Smaill } from './Smaill';
import '../02-useEffect/effects.css';

export const Memorize = () => {

    const { state: counter, increment } = useCounter(1);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Memorize works <Smaill value={counter} /></h1>
            <hr></hr>
            <button onClick={() => increment(1)} className="btn btn-primary">+ 1</button>
            <button
                className="btn btn-outline-primary ml-3"
                onClick={() => {
                    setShow(!show);
                }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
