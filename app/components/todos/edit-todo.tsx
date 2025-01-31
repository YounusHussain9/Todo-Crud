"use client";
import { editTodo } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil } from "lucide-react";
import React, { useState } from "react";

interface Props {
  todo: {
    id: string;
    title: string | null;
    isCompleted: boolean;
  };
}
const EditTodo = ({ todo }: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleEdit = () => {
    if (todo.isCompleted) return;
    setIsEdit(!isEdit);
  };
  const handleSubmit = () => {
    if (todo.isCompleted) return;
    setIsEdit(false);
  };

  return (
    <div>
      <div>
        {isEdit && (
          <form action={editTodo} onSubmit={handleSubmit} className="flex gap-2">
            <input type="text" name="inputId" value={todo.id} readOnly hidden />
            <Input
              type="text"
              name="editTodo"
              defaultValue={todo.title!}
              className="p-2 border !outline-none !ring-0 !ring-offset-0"
            />
            <Button
              type="submit"
              className="font-medium"
            >
              Update
            </Button>
          </form>
        )}

        {!isEdit && <Pencil onClick={handleEdit} size={18} />}
      </div>
    </div>
  );
};

export default EditTodo;
