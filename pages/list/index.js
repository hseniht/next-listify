import { useState } from "react";
import styles from "../../styles/pages/list.module.css";
export default function ListPage() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [newTodoDescription, setNewTodoDescription] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const todo = {
        title: newTodo,
        description: newTodoDescription,
      };
      setTodos([...todos, todo]);
      setNewTodo("s");
      setNewTodoDescription("");
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <section className={styles.todo__input}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo title..."
        />
        <textarea
          value={newTodoDescription}
          onChange={(e) => setNewTodoDescription(e.target.value)}
          placeholder="Enter a new todo description..."
        ></textarea>
        <button onClick={addTodo}>Add Todo</button>
      </section>
      <section className="todo__output">
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
