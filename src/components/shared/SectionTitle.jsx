const SectionTitle = ({ title = "Title" }) => {
  return (
    <h1 className="capitalize text-sm sm:text-lg font-semibold opacity-70">
      {title}
    </h1>
  );
};

export default SectionTitle;
