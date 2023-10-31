import Avatar from "../shared/Avatar";

const FriendItem = () => {
  return (
    <div className="w-full text-sm flex items-center justify-center gap-x-2 font-semibold click py-2 rounded-md px-2">
      <div>
        <Avatar />
      </div>
      <h1 className="text-sm opacity-80">Md Abu Obayda Zubayed Sayeb Hasan</h1>
    </div>
  );
};

export default FriendItem;
