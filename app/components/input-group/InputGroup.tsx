import { createTodo } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const InputGroup = () => {
  return (
    <div className="w-full flex  justify-center items-center p-4">
      <form action={createTodo} className="flex w-full md:w-[400px] gap-2 ">
        <Input
          type="text"
          name="input"
          placeholder="Enter your todo"
          className="p-2 border !outline-none !ring-0 !ring-offset-0"
        />
        <Button
          type="submit"
          className="font-medium"
          // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add
        </Button>
      </form>
    </div>
  );
};

export default InputGroup;
