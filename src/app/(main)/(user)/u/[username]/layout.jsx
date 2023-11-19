import NavItem from "@/components/profile/NavItem";
import Navigation from "@/components/profile/Navigation";
import Avatar from "@/components/shared/Avatar";
import Container from "@/components/shared/Container";
import ShowCount from "@/components/users/ShowCount";

export default function Layout({ children }) {
  return (
    <Container>
      <div className="flex flex-col gap-y-4 card sm:rounded-lg">
        <div className="p-4 flex flex-col md:flex-row items-center gap-4 w-full ">
          <div>
            <Avatar className="h-28 w-28" />
          </div>
          <div className="flex flex-col gap-y-2 w-full items-center md:items-start">
            <h1 className="text-base md:text-xl font-semibold">
              Md Abu Obayda zubayed sayeb Sakib al
            </h1>
            <p className="text-sm md:text-base">Bio</p>
          </div>
        </div>
        <div className="w-full flex items-center gap-x-2 px-2">
          <ShowCount title="Posts" count={15} />
          <ShowCount title="likes" count={9} />
          <ShowCount title="friends" count={65} />
        </div>
        <Navigation />
      </div>
      <>{children}</>
    </Container>
  );
}
