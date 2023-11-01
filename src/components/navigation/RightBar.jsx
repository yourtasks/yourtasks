import ImageAd from "../shared/ImageAd";
import UserList from "../users/UserList";

const RightBar = () => {
  return (
    <div className="hidden lg:block lg:w-3/12">
      <div className="w-full h-full p-4 flex flex-col gap-y-4 overflow-y-auto">
        <div className="h-fit">
          <ImageAd />
        </div>
        <div className="w-full h-2/5 flex flex-col gap-y-2">
          <h1 className="font-semibold opacity-60 px-2">Your Friends</h1>
          <UserList />
        </div>
        <div className="w-full h-2/5 flex flex-col gap-y-2">
          <h1 className="font-semibold opacity-60 px-2">Suggested Friends</h1>
          <UserList />
        </div>
      </div>
    </div>
  );
};

export default RightBar;
