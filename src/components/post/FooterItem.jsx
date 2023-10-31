const FooterItem = ({ Icon, count }) => {
  return (
    <div className="w-full py-2 click flex items-center justify-center rounded-md gap-x-2 no-select opacity-70">
      {Icon && <div>{Icon}</div>}
      <p className="font-medium text-sm">{count}</p>
    </div>
  );
};

export default FooterItem;
