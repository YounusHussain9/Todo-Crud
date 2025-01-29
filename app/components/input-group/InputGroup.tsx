"use client";
import { createTodo } from "@/app/actions";
import React, { useState } from "react";

const InputGroup = () => {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState<string[]>([]);

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      setTodo([inputValue, ...todo]);
    }
  };
  console.log(todo);
  return (
    <div>
      <form action={createTodo}>
        <input
          type="text"
          name="input"
          placeholder="Enter"
          className="p-2 border"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
        type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAdd}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default InputGroup;
