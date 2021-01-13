import React, { useContext } from 'react';
import { generateKey } from '../Functions/generateKey';
import { Context } from '../Functions/context';
import { HeaderStyled, HeaderInput, HeaderButton } from '../Style/HeaderStyled';

export const Header = () => {
    let { todoData, setTodoData } = useContext(Context);

    const addTodo = event => {
        event.preventDefault();
        const value = event.target.querySelector('input').value;
        event.target.reset();

        if(value.trim()) {
            const newTodo = {
                value: value,
                isCompleted: false,
                key: generateKey(),
                isEditable: false
            };

            todoData = [...todoData, newTodo];
            setTodoData(todoData);

        } else {
            alert('Пустую запись добавить нельзя!');
            return;
        }
    };

    return (
    <HeaderStyled>
        <form onSubmit={addTodo}>
            <label>
                <HeaderInput type='text' placeholder='Какие планы?' />
            </label>
            <HeaderButton type='submit' onSubmit={addTodo} />
        </form>
    </HeaderStyled>
    );

};