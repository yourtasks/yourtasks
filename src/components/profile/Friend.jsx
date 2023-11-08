import Avatar from "../shared/Avatar";

export default function Friend() {
  return (
    <div className="w-full flex gap-x-4">
      <div>
        <Avatar className="h-16 w-16" />
      </div>
      <div className="w-full">
        <h1 className="text-lg font-semibold">Md Mofazzal Hossain</h1>
        <p>biography</p>
      </div>
      <div className="flex flex-col justify-center">
        <div className="px-4 button">Unfriend</div>
      </div>
    </div>
  );
}
