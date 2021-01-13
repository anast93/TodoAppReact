import styled from 'styled-components';

export const ContainerStyled = styled.div`
    width: 100%;
    float: left;
    padding: 15px;
`;

export const TodoListStyled = styled.ul`
    width: 100%;
    float: left;

    &:after {
        width: 100%;
        display: block;
        text-align: center;
        font-size: 12px;
        color: #aaa;
    }

    &:empty:after {
        content: 'Нет задач';
        margin: 15px 0 0 0;
    }
`;

export const TodoListCompleted = styled.ul`
    width: 100%;
    float: left;
    position: relative;
    padding: 60px 0 0 0;

    &:before {
        content: '';
        width: 150px;
        height: 1px;
        background: #d8e5e0;
    
        position: absolute;
        top: 30px;
        left: 50%;
    
        margin: 0 0 0 -75px;
    }

    &:empty:after {
        content: 'Нет выполненых задач';
    }

    &::after {
        width: 100%;
        display: block;
        text-align: center;
        font-size: 12px;
        color: #aaa;
    }
`;