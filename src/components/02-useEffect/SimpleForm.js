import React, { useEffect, useState } from 'react';
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => {
        // console.log('yep');
    }, []);

    useEffect(() => {
        // console.log('FormState change');
    }, [formState]);

    useEffect(() => {
        // console.log('Email change');
    }, [email]);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <div>
            <h1>useEffect</h1>
            <hr></hr>
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                ></input>
            </div>
            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Tu email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                ></input>
            </div>
            {
                (name === '123') &&
                <Message />
            }
        </div>
    )
}
