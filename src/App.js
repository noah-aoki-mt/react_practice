import { useState, useRef } from "react";
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([{ id: 1, name: "Todo1", completed: false }])

  const todoNameREf = useRef();

  const handleAddTodo = () => {
    //タスクを追加する
    const name = todoNameREf.current.value;
    if(name === "")return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];

    });
    todoNameREf.current.value = null;
  }

  const toggleTodo = (id) =>{
    const newTodos = [...todos];
    //Todoの５つすべてを見ていって引数のidと同じかチェックしてそれだけtodoにいれる
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  const handleClear = () => {
    const newTodos = todos.filter((todo)=> !todo.completed);
    setTodos(newTodos);
  }
  return (
    <>
      <ToDoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameREf} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスク：{todos.filter((todo) => !todo.completed).length}</div>
    </>
  );
}


export default App;
