import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';
import { FaTrash } from 'react-icons/fa';

const Tds = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch()

    const removeTodoHandler = (id) => {
        dispatch(removeTodo(id))
    }

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4 text-green-200">To-Do List</h1>
            {todos.length === 0 ? (
                <p className="text-yellow-200 text-2xl">No todos available</p>
            ) : (
                <ul>
                    {todos.map(todo => (
                        <li key={todo.id} className="p-3 my-2 w-full border rounded bg-black flex justify-between">
                            <span className="text-yellow-200 text-xl">{todo.text}</span>
                            <button onClick={() => removeTodoHandler(todo.id)} className="text-red-500 hover:text-red-700 focus:outline-none">
                                <FaTrash />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Tds
