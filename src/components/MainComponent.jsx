import React from 'react'
import AddTodo from './AddTodo'
import Tds from './Tds'

const MainComponent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-700">
     <div className="bg-green-900 p-6 rounded shadow-md w-full max-w-md text-center">
        <AddTodo />
        <Tds />
     </div>
  </div>
  )
}

export default MainComponent
