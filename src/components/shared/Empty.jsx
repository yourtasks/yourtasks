import { ImFileEmpty } from "react-icons/im";

const Empty = ({ title = "Title" }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-y-4 capitalize">
      <div className="opacity-70">
        <ImFileEmpty size={30} />
      </div>
      <p className="text-lg font-medium opacity-80">{title}</p>
    </div>
  );
};

export default Empty;
