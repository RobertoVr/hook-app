import React, { useRef } from 'react'
import '../02-useEffect/effects.css';

export const FocusScreen = () => {

    const inputRef = useRef()

    const handleClick = () => {
        // document.querySelector('input').select();
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus Screen works</h1>
            <hr></hr>
            <input
                ref={inputRef}
                type="text"
                className="form-control"
                placeholder="tu nombre"
            ></input>
            <button
                className="btn btn-outline-primary mt-5"
                onClick={handleClick}
            >
                Focus</button>
        </div>
    )
}
