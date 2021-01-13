import { useState } from 'react';

export const useList = () => {
    const [todoData, setTodoData] = useState(() => 
        JSON.parse(localStorage.getItem('todoList')))
    return { todoData, setTodoData };
};