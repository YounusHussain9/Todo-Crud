import InputGroup from "./components/input-group/InputGroup";

export default function Home() {
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      {/* <h1 className="text-5xl font-bold text-gray-900">Todo App</h1> */}
      <div>
        <InputGroup />
      </div>
    </div>
  );
}
