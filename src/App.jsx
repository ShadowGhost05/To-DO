import React from 'react';
import TodoContextProvider from './context/TodoContextProvider';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 flex items-center justify-center">
            <div className="bg-white shadow-2xl rounded-3xl w-full max-w-lg p-8 space-y-6 transform transition-transform hover:scale-105 hover:shadow-3xl">
                <h1 className="text-4xl font-extrabold text-center text-gray-800 tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                        ToDo
                    </span>{' '}
                    List
                </h1>
                <TodoContextProvider>
                    <div className="space-y-4">
                        <TodoInput />
                        <TodoList />
                    </div>
                </TodoContextProvider>
            </div>
        </div>
    );
}

export default App;
