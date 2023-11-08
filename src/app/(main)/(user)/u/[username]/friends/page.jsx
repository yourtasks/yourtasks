import Friend from "@/components/profile/Friend";
import SectionTitle from "@/components/shared/SectionTitle";
import UserItem from "@/components/users/UserItem";
import UserList from "@/components/users/UserList";

export default function Page() {
  return (
    <>
      <div className="p-4 card sm:rounded-lg">
        <SectionTitle title="All of your friends" />
        <div className="w-full flex flex-col gap-y-2 overflow-y-auto py-4">
          <Friend />
        </div>
      </div>
    </>
  );
}
