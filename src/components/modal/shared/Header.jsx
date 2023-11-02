const Header = ({ title = "Title" }) => {
  return (
    <div className="w-full capitalize text-xl font-medium opacity-50">
      {title}
    </div>
  );
};

export default Header;
