import Avatar from "@/components/shared/Avatar";
import Container from "@/components/shared/Container";
import ShowCount from "@/components/users/ShowCount";

export default function Layout({ children }) {
  return (
    <Container>
      <div className="flex flex-col gap-y-4 p-4 card sm:rounded-lg">
        <div className="flex items-center gap-x-4 w-full ">
          <div>
            <Avatar className="h-28 w-28" />
          </div>
          <div className="flex flex-col gap-y-2 w-full">
            <h1 className="text-xl font-semibold w-full">
              Md Abu Obayda zubayed sayeb Sakib al
            </h1>
            <p>Bio</p>
          </div>
        </div>
        <div className="w-full flex items-center gap-x-2 px-2">
          <ShowCount title="Posts" href={`/u/username/posts`} />
          <ShowCount title="likes" />
          <ShowCount title="friends" href={`/u/username/friends`} />
        </div>
      </div>
      <>{children}</>
    </Container>
  );
}
