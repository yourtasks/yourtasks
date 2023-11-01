import UserItem from "./UserItem";

const UserList = () => {
  return (
    <div className="w-full h-full card flex flex-col gap-y-2 overflow-y-auto rounded-lg p-2 no-select">
      <UserItem />
    </div>
  );
};

export default UserList;
