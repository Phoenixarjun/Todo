import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; // we will use this to create a unique id for each todo
import AddTodo from "./AddTodo";
import EditTodo from "./EditTodo";
import Todo from "./Todo";

const TodoContainerLocalStorage = () => {
  const [todos, setTodos] = useState([]); // we will use this state to store the todos

  // this will run only once when the component mounts
  useEffect(() => {
    const saveTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(saveTodos);
  }, []);

  // add a new todo
  const addTodo = (userInput) => {
    if (userInput) {
      const newItem = {
        id: uuidv4(),
        task: userInput,
        complete: false,
        isEditing: false,
      };
      setTodos([...todos, newItem]);
      localStorage.setItem("todos", JSON.stringify([...todos, newItem]));
    }
  };

  // delete a todo
  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
  };

  // toggle the complete status of a todo
  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  // edit a todo
  const editTask = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = !todo.isEditing;
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  // edit a todo
  const editTodo = (newTask, id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.task = newTask;
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <div className="bg-gray-900 mt-20 p-8 rounded">
      <h1 className="text-white mb-4 text-2xl">Get Things Done!</h1>
      <AddTodo addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodo editTodo={editTask} task={todo} key={index} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoContainerLocalStorage;
