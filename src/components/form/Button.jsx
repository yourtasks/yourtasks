const Button = ({ title, ...props }) => {
  return (
    <button {...props} className="button w-full py-2 capitalize font-semibold">
      {title}
    </button>
  );
};

export default Button;
