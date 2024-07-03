import React, { useState } from 'react';
import { IoAddCircleOutline } from 'react-icons/io5';

const AddTodo = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTodo(value);
      setValue('');
    }
  };

  return (
    <div className="flex items-center rounded-lg py-2 px-4">
        <input
          type="text"
          value={value}
          placeholder="Add Tasks"
          onChange={(e) => setValue(e.target.value)}
          className="rounded-xl border border-2 border-indigo-500 rounded-r-none p-2 py-3 mb-4 w-96 bg-primary text-white outline-none"
        />
        <button
        onClick={handleSubmit}
        className="bg-indigo-500  text-white border-none p-3 py-4 -translate-y-2 h-18 cursor-pointer rounded-lg rounded-l-none"
        >
        <IoAddCircleOutline className="text-xl" />
      </button>
    </div>
  );
};

export default AddTodo;
