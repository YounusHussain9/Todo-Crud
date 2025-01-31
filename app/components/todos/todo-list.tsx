import { getTodos } from "@/app/hooks/get-todos";
import React from "react";
import ChangeStatus from "./change-todo-status";
import EditTodo from "./edit-todo";
import DeleteTodo from "./delete-todo";

const TodoList = async () => {
  const data = await getTodos();
  return (
    <div className=" w-full md:w-[800px] px-4">
      {data.map((todo) => (
        <div
          key={todo.id}
          className="relative border   rounded-md mt-4 overflow-hidden"
        >
          {todo.isCompleted && (
            <div className="text-xs bg-green-300 px-2 p-1 rounded-sm  text-green-600 font-bold">
              Completed
            </div>
          )}
          <div className="flex justify-between flex-col md:flex-row gap-y-2 md:gap-y-0 items-center p-4 ">
            <div>{todo.title}</div>
            <div className=" flex   items-centser gap-4">
              <EditTodo todo={todo} />
              <ChangeStatus todo={todo} />
              <DeleteTodo todoId={todo.id} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
