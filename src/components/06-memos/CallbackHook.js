import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';
import '../02-useEffect/effects.css';

export const CallbackHook = () => {

    const [counter, setCoutner] = useState(0);

    // const increment = () => {
    //     setCoutner(counter + 1);
    // }

    const increment = useCallback((num) => {
        setCoutner(prev => prev + num);
    }, [setCoutner]);

    return (
        <div>
            <h1>UseCallbackHook: {counter}</h1>
            <hr></hr>
            <ShowIncrement increment={increment} />
        </div>
    )
}
