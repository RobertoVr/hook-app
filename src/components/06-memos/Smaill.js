import React from 'react'

export const Smaill = React.memo (({ value }) => {
    console.log('Me volví a ejecutar');
    return (
        <small>
            {value}
        </small>
    )
})
