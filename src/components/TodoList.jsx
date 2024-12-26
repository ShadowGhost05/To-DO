import React, { useContext, useState } from 'react';
import TodoContext from '../context/TodoContext';

function TodoList() {
    const { todos, deleteTodo, updateTodo } = useContext(TodoContext);
    const [editingId, setEditingId] = useState(null);
    const [newText, setNewText] = useState('');

    const handleUpdateClick = (id, currentText) => {
        setEditingId(id);
        setNewText(currentText);
    };

    const handleSaveClick = (id) => {
        if (newText.trim()) {
            updateTodo(id, newText);
            setEditingId(null);
            setNewText('');
        }
    };

    return (
        <div className="space-y-4">
            {todos.length === 0 ? (
                <p className="text-gray-500 text-center mt-4">No tasks yet! Add some above.</p>
            ) : (
                todos.map((todo) => (
                    <div
                        key={todo.id}
                        className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500"
                    >
                        {editingId === todo.id ? (
                            <div className="flex items-center space-x-2 w-full">
                                <input
                                    type="text"
                                    value={newText}
                                    onChange={(e) => setNewText(e.target.value)}
                                    className="flex-1 px-3 py-2 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                                />
                                <button
                                    onClick={() => handleSaveClick(todo.id)}
                                    className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition duration-200"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={() => setEditingId(null)}
                                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-200"
                                >
                                    Cancel
                                </button>
                            </div>
                        ) : (
                            <>
                                <span className="text-gray-800 text-lg font-medium">{todo.todoText}</span>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => handleUpdateClick(todo.id, todo.todoText)}
                                        className="bg-purple-400 text-white px-3 py-2 rounded-md hover:bg-purple-500 transition duration-200"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => deleteTodo(todo.id)}
                                        className="bg-pink-400 text-white px-3 py-2 rounded-md hover:bg-pink-500 transition duration-200"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                ))
            )}
        </div>
    );
}

export default TodoList;
