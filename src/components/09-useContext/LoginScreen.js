import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const { setUser } = useContext(UserContext);

    const login = () => {
        setUser({
            id:192312,
            name: 'Roberto',
            email: 'roberto@gmail.com'
        })
    }

    return (
        <div>
            <div>
                <h1>Login Screen</h1>
                <hr />
                <button
                    onClick={login}
                    className="btn btn-primary">
                    Login
                </button>
            </div>
        </div>
    )
}
