import React, { useState } from 'react';
import { MdOutlineUpdate } from "react-icons/md";


const EditTodo = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
  };

  return (
    <div className="flex justify-center items-center mb-4 w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="py-3 rounded-xl border border-2 border-indigo-500 rounded-r-none p-2 mb-4 w-96 bg-primary text-white outline-none"
      />
      <button
        onClick={handleSubmit}
        className="bg-indigo-500 text-white border-none p-3 py-4 -translate-y-2 h-18 cursor-pointer rounded-lg rounded-l-none"
      >
        <MdOutlineUpdate className="text-xl"/>
      </button>
    </div>
  );
};

export default EditTodo;
