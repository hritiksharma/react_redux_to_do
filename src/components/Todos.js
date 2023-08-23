import { UseSelector, useSelector } from "react-redux";
import React from 'react'

const Todos = () => {

    const todos = useSelector((state) => state.todos)
    return (
        <>
            {todos && todos.map((todo) => (
                <li key={todo.id}>{todo.text} </li>
            ))}
        </>
    )
}

export default Todos