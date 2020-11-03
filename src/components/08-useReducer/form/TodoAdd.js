import React from 'react'
import { useForm } from '../../../hooks/useForm';

export const TodoAdd = ({ handleAddToDo }) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length <= 1) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }
        handleAddToDo(newTodo);
        reset();
    }

    return (
        <>
            <h4>Agregar To DO</h4>
            <hr></hr>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleInputChange}
                    value={description}
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Aprender....."
                    autoComplete="off"
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                >
                    Agregar
                        </button>
            </form>
        </>
    )
}
