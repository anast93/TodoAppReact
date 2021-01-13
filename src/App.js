import React, { useEffect } from 'react';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { Header } from './Components/Header/Header';
import { ToDoContainer } from './Components/ToDoContainer/ToDoContainer';
import { useList } from './Components/Hooks/useList';
import { Context } from './Components/Functions/context';


function App() {
  const todoData = useList();

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoData.todoData));
  }, [todoData.todoData])

  return (
    <Context.Provider value={ todoData }>
      <GlobalStyle />
      <Header />
      <ToDoContainer />
    </Context.Provider>
  );
}

export default App;
