import React, { useState } from "react";

export const CreateTodoField = ({
  addTodo,
  title,
  setTitle,
  description,
  setDescription,
}) => {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  const handleAddJobFormSubmit = (e) => {
    e.preventDefault();
    addTodo(title, description);
    // setTitle(e.target.description.value);
  };
  return (
    <form
      onSubmit={handleAddJobFormSubmit}
      className="flex flex-col items-center justify-between mb-4 rounded-2xl border-gray-800 border-2 px-5 py-5 mt-10 w-full"
    >
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className=" w-full text-xl  outline-none rounded-2xl bg-gray-800 p-5"
        placeholder="Task Title"
        name="titleName"
      />
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="w-full text-xl  outline-none rounded-2xl bg-gray-800 p-5 my-5"
        placeholder="Task Description"
        name="descriptionTodo"
      />
      <button
        type="submit"
        className="text-2xl text-gray-600 rounded-lg bg-gray-800 px-3 py-2 "
        // onSubmit={(e) => addTodo(title)}
      >
        +
      </button>
    </form>
  );
};
