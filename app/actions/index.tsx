"use server";

import { revalidatePath } from "next/cache";
import { prisma as Prisma } from "../utils/prisma";
export async function createTodo(formData: FormData) {
  const input = formData.get("input") as string;
  if (!input.trim()) return;
  await Prisma.todo.create({ data: { title: input } });
  revalidatePath("/");
}

export async function changeTodoStatus(formData: FormData) {
  const inputId = formData.get("inputId") as string;
  const todo = await Prisma.todo.findUnique({
    where: {
      id: inputId,
    },
  });
  const updateStatus = !todo?.isCompleted;
  await Prisma.todo.update({
    where: {
      id: inputId,
    },
    data: {
      isCompleted: updateStatus,
    },
  });
  revalidatePath("/");
}

export async function editTodo(formData: FormData) {
  const editInput = formData.get("editTodo") as string;
  const inputId = formData.get("inputId") as string;
  if (!editInput.trim()) return;
  await Prisma.todo.update({
    where: {
      id: inputId,
    },

    data: {
      title: editInput,
    },
  });
  revalidatePath("/");
}

export async function deleteTodo(formData: FormData) {
  const inputId = formData.get("inputId") as string;
  await Prisma.todo.delete({
    where: {
      id: inputId,
    },
  });
  revalidatePath("/");
}
