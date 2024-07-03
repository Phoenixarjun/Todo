import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddTodo from './AddTodo';
import EditTodo from './EditTodo';
import Todo from './Todo';

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => { // this will run only once when the component mounts
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
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
      const newTodos = [...todos, newItem];
      setTodos(newTodos);
      localStorage.setItem('todos', JSON.stringify(newTodos));
    }
  };

  // delete a todo
  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
    localStorage.setItem('todos', JSON.stringify(filteredTodos));
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
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
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
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  // save the edited todo
  const editTodo = (newTask, id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.task = newTask;
        todo.isEditing = false; 
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const numberComplete = todos.filter((t) => t.complete).length;
  const numberTotal = todos.length;

  // get a message based on the number of todos
  function getMessage() {
    const percentage = numberTotal === 0 ? 0 : (numberComplete / numberTotal) * 100;
    if (percentage === 0) {
      return 'Try to do at least one! 🙏';
    }
    if (percentage === 100) {
      return 'Nice job for today! 🏝';
    }
    return 'Keep it going 💪🏻';
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3 text-center">
      <h1 className="text-3xl text-white">TASKMASTER</h1>
      <h2 className="text-lg text-white">{getMessage()}</h2>
      <AddTodo addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodo editTodo={editTodo} task={todo} key={todo.id} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTask={editTask}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};

export default TodoContainer;
