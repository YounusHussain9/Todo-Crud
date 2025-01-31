import { deleteTodo } from "@/app/actions";
import { Trash2 } from "lucide-react";
import React from "react";

interface Props {
  todoId: string;
}

const DeleteTodo = ({ todoId }: Props) => {
  return (
    <div>
      <form action={deleteTodo}>
        <input type="text" name="inputId" value={todoId} readOnly hidden />
        <button type="submit" className=""><Trash2 size={18} className="!text-red-600" /></button>
      </form>
    </div>
  );
};

export default DeleteTodo;
