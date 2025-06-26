import { Spinner } from "@heroui/spinner";

const Loading = () => {
  return (
    <div className="h-screen bg-black-400/10 fixed inset-0 z-[99] backdrop-blur-md flex justify-center items-center">
      <Spinner />
    </div>
  );
};

export default Loading;
