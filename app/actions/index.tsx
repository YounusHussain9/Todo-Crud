"use server";

import { revalidatePath } from "next/cache";
import { prisma as Prisma } from "../utils/prisma";
export async function createTodo(formData: FormData) {
  const input = formData.get("input") as string;
  if (!input.trim()) return;
  await Prisma.todo.create({ data: { title: input } });
  revalidatePath("/");
}
