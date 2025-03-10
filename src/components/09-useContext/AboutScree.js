import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const AboutScreen = () => {

    const { user, setUser } = useContext(UserContext);

    const handleClick = () => {
        setUser({});
    }

    return (
        <div>
            <div>
                <h1>About Screen</h1>
                <hr />
                <pre>
                    {JSON.stringify(user, null, 3)}
                </pre>
                <button
                    onClick={handleClick}
                    className="btn btn-warning">
                    Logout
                </button>
            </div>
        </div>
    )
}
