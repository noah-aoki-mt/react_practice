import React from 'react'
import Todo from './todo';

//以下が関数コンポーネント
const ToDoList = ({ todos, toggleTodo }) => {
  return todos.map( (todo) => 
  <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />);
  
};

export default ToDoList;