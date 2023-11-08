import Link from "next/link";

const Count = () => {
  return <p className="text-lg font-medium">52</p>;
};

const Title = ({ title }) => {
  return <p className="text-sm font-medium capitalize opacity-60">{title}</p>;
};

const ShowCount = ({ title = "title", href }) => {
  if (href) {
    return (
      <Link
        href={href}
        className="w-full flex flex-col items-center click rounded-md py-2"
      >
        <Count />
        <Title title={title} />
      </Link>
    );
  }

  return (
    <div className="w-full flex flex-col items-center">
      <Count />
      <Title title={title} />
    </div>
  );
};

export default ShowCount;
