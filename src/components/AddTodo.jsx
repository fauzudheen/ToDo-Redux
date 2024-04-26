import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const AddTodo = () => {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }  

  return (
    <div>
      
    <h2 className="text-4xl font-bold mb-4 text-white">Add ToDo</h2>
    <form onSubmit={addTodoHandler}>
      <div className="mb-4">
        <label htmlFor="todo" className="block text-sm font-medium text-gray-700">ToDo:</label>
        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" id="todo" name="todo" className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500  " />
      </div>
      <div className="flex justify-end">
        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Add
        </button>
      </div>
      </form>
  </div>
  )
}

export default AddTodo
