import React from 'react'
import PropTypes from 'prop-types';

export const ShowIncrement = React.memo(({ increment }) => {

    console.log('Me volví a generar');

    return (
        <div>
            <button
                className="btn btn-primary"
                onClick={() => increment(5)}
            >
                Incrementar
                </button>
        </div>
    )
})

ShowIncrement.propTypes = {
    increment: PropTypes.func.isRequired
}
