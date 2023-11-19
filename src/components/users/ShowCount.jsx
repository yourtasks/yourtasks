const Title = ({ title }) => {
  return <p className="text-sm font-medium capitalize opacity-60">{title}</p>;
};

const ShowCount = ({ title = "title", count }) => {
  return (
    <div className="w-full flex flex-col items-center font-medium md:font-semibold">
      <p className="">{count}</p>
      <Title title={title} />
    </div>
  );
};

export default ShowCount;
