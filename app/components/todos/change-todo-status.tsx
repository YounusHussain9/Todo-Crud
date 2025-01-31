import { changeTodoStatus } from "@/app/actions";
import { Check, X } from "lucide-react";
import React from "react";

interface Props {
  todo: {
    id: string;
    title: string | null;
    isCompleted: boolean;
  };
}
const ChangeStatus = ({ todo }: Props) => {
  return (
    <div>
      <form action={changeTodoStatus}>
        <input type="text" name="inputId" value={todo.id} readOnly hidden />
        <button type="submit">
          {todo.isCompleted ? <X size={18} /> : <Check size={18} />}
        </button>
      </form>
    </div>
  );
};

export default ChangeStatus;
