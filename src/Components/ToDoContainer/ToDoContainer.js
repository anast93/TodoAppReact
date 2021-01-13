import React, { useContext } from 'react';
import { TodoItem } from './TodoItem';
import { Context } from '../Functions/context';
import { ContainerStyled, TodoListStyled, TodoListCompleted } from '../Style/TodoContainerStyled';


export const ToDoContainer = () => {
    let { todoData } = useContext(Context);

    const todoList = todoData.filter(elem => !elem.isCompleted),
        todoListCompleted = todoData.filter(elem => elem.isCompleted);

    const addItemToList = array => {
        if(array.length) {
            return array.map(elem => {
                return (
                    <TodoItem 
                    key={elem.key}
                    elem={elem} />
                )   
            })
        } 
        return '';
    };

    return (
        <ContainerStyled>
            <TodoListStyled>
                {addItemToList(todoList)}
            </TodoListStyled>
            <TodoListCompleted>
                {addItemToList(todoListCompleted)}
            </TodoListCompleted>
        </ContainerStyled>
    );
};

