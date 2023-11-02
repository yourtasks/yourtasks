import IconButton from "@/components/shared/IconButton";
import { MdClose } from "react-icons/md";

const Close = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-2 right-4 z-10 text-xl p-2 rounded-full invert-bg bg-opacity-10 dark:bg-opacity-10 sm:hover:bg-opacity-20 sm:hover:scale-110 sm:dark:hover:bg-opacity-20 active:bg-opacity-5 dark:active:bg-opacity-5 transition"
      filled={true}
    >
      <MdClose />
    </button>
  );
};

export default Close;
