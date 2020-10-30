import React, { useState, useMemo } from 'react'
import { procesoPesado } from '../../helpers/ProcesoPesado';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

export const MemoHook = () => {

    const { state: counter, increment } = useCounter(1000);
    const [show, setShow] = useState(true);
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h2>Memo hook Counter: {counter}</h2>
            <hr></hr>
            <p>{memoProcesoPesado}</p>
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
