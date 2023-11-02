import { MdClose } from "react-icons/md";

const Close = () => {
  return (
    <div className="p-2 rounded-full invert-bg bg-opacity-20 dark:bg-opacity-20 absolute top-4 right-4">
      <MdClose />
    </div>
  );
};

export default Close;
