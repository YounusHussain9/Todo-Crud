import InputGroup from "./components/input-group/InputGroup";
import TodoList from "./components/todos/todo-list";

export default function Home() {
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center border">
      <h1 className="text-5xl font-bold text-gray-900 drop-shadow-sm font-">
        Stay! Organized
      </h1>
      <span className="text-sm text-[#a4a4a4] font-medium mt-2 block">
        A better way to manage your day.
      </span>

      <InputGroup />
      <TodoList />
    </div>
  );
}
