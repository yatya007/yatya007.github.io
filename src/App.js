import './App.css';
import { useState } from 'react';
import { InputTodo } from './components/InputTodo.jsx'
import { IncompleteTodo } from './components/IncompleteTodo.jsx'
import { CompleteTodo } from './components/CompleteTodo.jsx'

export const App = () =>{

  const [todoText, setTodoText] = useState("");
  const[incompleteTodos, setIncompleteTodos] = useState([]);
  const[completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;

    const newTodos = [...incompleteTodos, todoText];
    setTodoText("");
    setIncompleteTodos(newTodos);  
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);

    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
  };

  const onClickReturn = (index) => {
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);

    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
  };

  const isMaxLimitIncomleteTodos = incompleteTodos.length >= 5;

  return (
    <>
      <InputTodo 
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={isMaxLimitIncomleteTodos}
        incompleteTodos={incompleteTodos}
        completeTodos={completeTodos}
      />
      {isMaxLimitIncomleteTodos && (
        <p style={{color:"red"}}>
          登録できるTODOは5個までです。
        </p>
      )}
      <IncompleteTodo
        incompleteTodos = {incompleteTodos}
        onClickDelete = {onClickDelete}
        onClickComplete = {onClickComplete}
      />

      <CompleteTodo
        completeTodos = {completeTodos}
        onClickReturn = {onClickReturn}
      />
    </>
  );
}
