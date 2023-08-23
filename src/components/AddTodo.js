import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from "../features/todo/todoSlice"
const AddTodo = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    console.log("input", input);

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))

        setInput("");
    }

    return (
        <div>
            <form onSubmit={addTodoHandler}>
                <label>Enter A Task </label>
                <input type='text' placeholder='ex. get up at 4 am' value={input} onChange={(e) => setInput(e.target.value)} />
                <button type='submit'> Submit</button>
            </form>
        </div>
    )
}

export default AddTodo