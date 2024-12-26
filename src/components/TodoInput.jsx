import React, { useState, useContext } from 'react';
import TodoContext from '../context/TodoContext';

function TodoInput() {
    const [input, setInput] = useState('');
    const { addTodo } = useContext(TodoContext);

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (input.trim()) {
            addTodo(input);
            setInput('');
        }
    };

    return (
        <form
            onSubmit={handleAddTodo}
            className="flex items-center space-x-4 bg-gray-100 p-4 rounded-xl shadow-sm"
        >
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new task..."
                className="flex-1 px-4 py-2 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-700"
            />
            <button
                type="submit"
                className="bg-purple-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-purple-700 transition duration-200 shadow-lg"
            >
                Add
            </button>
        </form>
    );
}

export default TodoInput;
