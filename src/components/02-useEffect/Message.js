import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const { x, y } = coords;

    useEffect(() => {
        console.log('Componente montado');

        const mousemove = (e) => {
            const coords = { x: e.x, y: e.y };
            setCoords(coords);
            // console.log(coors);
        }

        window.addEventListener('mousemove', mousemove);

        return () => {
            console.log('Componente desmontado');
            window.removeEventListener('mousemove', mousemove);
        }
    }, []);

    return (
        <div>
            <h3>Message works</h3>
            <p>
                x: {x}, y:{y}
            </p>
        </div>
    )
}
