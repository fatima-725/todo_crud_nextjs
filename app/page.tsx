import Box from "@/components/box";
import InputTask from "@/components/input";
import Display from "@/components/task";

export default function Home() {
  return (
    <div className="container h-screen w-screen bg-yellow-200  justify-center ">
      <Box />
      <InputTask />
      <Display />
    </div>
  );
}
