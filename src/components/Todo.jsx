import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { MdOutlineDelete } from 'react-icons/md';

const Todo = ({ task, deleteTodo, editTask, toggleComplete }) => {
  return (
    <div className="flex justify-between items-center gap-2 bg-indigo-500 text-white p-4 rounded w-full">
      <div className="flex space-x-2 items-center">
        <input
          type="checkbox"
          className="mr-4"
          checked={task.complete}
          onChange={() => toggleComplete(task.id)}
        />
        <p
          className={`${
            task.complete ? 'line-through text-purple-200' : 'cursor-pointer text-white'
          } text-xl`}
          onClick={() => toggleComplete(task.id)}
        >
          {task.task}
        </p>
      </div>
      <div className="flex items-center justify-center gap-3">
        <FaRegEdit
          className="text-white text-xl cursor-pointer hover:text-tertiary"
          onClick={() => editTask(task.id)}
        />
        <MdOutlineDelete
          className="text-white text-xl cursor-pointer hover:text-tertiary"
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
