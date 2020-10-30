import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import './Layout.css';

export const Layout = () => {

    const { state: counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0];
    const [boxSize, setBoxSize] = useState({})

    const pTag = useRef('')

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote]);

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr></hr>

            <blockquote className="blackquote text-right">
                <p className="mb-0" ref={pTag}>{quote}</p>
                {/* <footer className="blockquote-footer">{author}</footer> */}
            </blockquote>
            <pre>
                {
                    JSON.stringify(boxSize, null, 3)
                }
            </pre>
            <button className="btn btn-primary" onClick={() => { increment(1) }}>Siguiente quote</button>
        </div>
    )
}
