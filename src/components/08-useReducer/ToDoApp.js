import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';
import './styles.css'

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false,
    // }]
}

export const ToDoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);
    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action);
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

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
        const action = {
            type: 'add',
            payload: newTodo
        }
        dispatch(action);
        reset();
    }

    return (
        <div>
            <h1>To Do App ({todos.length})</h1>
            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-fush">
                        {
                            todos.map((todo, idx) => (
                                <li
                                    className="list-group-item"
                                    key={todo.id}>
                                    <p
                                        onClick={() => handleToggle(todo.id)}
                                        className={`${todo.done && 'complete'}`}
                                    >
                                        {idx + 1}. {todo.desc}
                                    </p>
                                    <button
                                        onClick={() => handleDelete(todo.id)}
                                        className="btn btn-danger">
                                        Borrar
                                </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-5">
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
                </div>
            </div>
        </div>
    )
}
