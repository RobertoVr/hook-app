import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <>
            <ul className="list-group list-group-fush">
                {
                    todos.map((todo, idx) => (
                        <TodoListItem todo={todo} idx={idx} handleDelete={handleDelete} handleToggle={handleToggle} />
                    ))
                }
            </ul>
        </>
    )
}
