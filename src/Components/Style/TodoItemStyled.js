import styled from 'styled-components';

export const Item = styled.li`
    width: 100%;
    min-height: 50px;
    float: left;
    font-size: 14px;
    font-weight: 500;
    color: #444;
    line-height: 22px;

    background: #fff;
    border-radius: 5px;
    position: relative;
    box-shadow: 0 1px 2px rgba(44, 62, 80, 0.10);
    margin: 0 0 10px 0;
    padding: 14px 100px 14px 14px;
    word-break: break-word;

    &:last-of-type {
        margin: 0;
    }
`;

export const ButtonsDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 0;
    right: 0;
`;

export const Buttons = styled.button`
    width: 50px;
    height: 50px;
    background-color: transparent;
    background-image: ${({ img }) => `url(${ img })`};
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    border: 0;
    box-shadow: none;
    outline: none;
    cursor: pointer;

    -webkit-appearance: none;
    -moz-appearance: none;

    & button:last-of-type:before {
        content: '';
        width: 1px;
        height: 30px;
        background: #edf0f1;
    
        position: absolute;
        top: 10px;
        left: 0;
    }
`;