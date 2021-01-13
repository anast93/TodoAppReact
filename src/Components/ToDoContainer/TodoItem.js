import React, { useContext } from 'react';
import editBtnImg from '../../Images/pencil.png';
import removeBtnImg from '../../Images/trash.png';
import uncheckBtnImg from '../../Images/uncheck.png';
import checkBtnImg from '../../Images/check.png';
import { Context } from '../Functions/context';
import { Item, ButtonsDiv, Buttons } from '../Style/TodoItemStyled';

export const TodoItem = ({ elem }) => {
    let { todoData, setTodoData } = useContext(Context);

    const removeTodo = key => {
        todoData = todoData.filter(elem => elem.key !== key);
        setTodoData(todoData);
    };

    const editTodo = key => {
        let newTodoData;
        newTodoData = todoData.map(elem => {
            if(elem.key === key) {
                elem.isEditable = !elem.isEditable;
            }
            return elem;
        })
        setTodoData(newTodoData);
    };

    const saveTodo = (key, event) => {
        if(!event.target.matches('li'))  return;

        const li = event.target.closest('li');

        if(!li.hasAttribute('contenteditable')) return;

        const newValue = li.textContent.trim();

        todoData = todoData.map(elem => {
            if(elem.key === key) {
                elem.value = newValue;
                elem.isEditable = false;
            }
            return elem;
        })
        setTodoData(todoData);
    }

    const completeTodo = key => {
        let newTodoData;
        newTodoData = todoData.map(elem => {
            if(elem.key === key) {
                elem.isCompleted = !elem.isCompleted;
            }
            return elem;
        })
        setTodoData(newTodoData);
    };

    return (
        <Item 
            onBlur={event => saveTodo(elem.key, event)}
            contentEditable={elem.isEditable}
            suppressContentEditableWarning='true'>
            {elem.value}
            <br/>
            <ButtonsDiv>
                <Buttons 
                    img={editBtnImg}
                    onClick={() => editTodo(elem.key)}>
                    </Buttons>
                <Buttons 
                    img={removeBtnImg} 
                    onClick={() => removeTodo(elem.key)}>
                </Buttons>
                <Buttons 
                    img={elem.isCompleted ? checkBtnImg : uncheckBtnImg}
                    onClick={() => completeTodo(elem.key)}>
                </Buttons>
            </ButtonsDiv>
        </Item>
    );
}