import { prisma } from "../utils/prisma";
export const getTodos = async () => {
  const data = prisma.todo.findMany({
    select: {
      id: true,
      title: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
  return data;
};
