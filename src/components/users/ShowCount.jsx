const ShowCount = ({ title = "title" }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <p className="text-lg font-medium">52</p>
      <p className="text-sm font-medium capitalize opacity-60">{title}</p>
    </div>
  );
};

export default ShowCount;
