import Avatar from "@/components/shared/Avatar";
import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import ShowCount from "@/components/users/ShowCount";
import { BiSolidBadgeCheck } from "react-icons/bi";

const Page = () => {
  return (
    <Container className="md:py-4">
      <div className="flex flex-col gap-y-4 p-4 card rounded-lg">
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
          <ShowCount title="Posts" />
          <ShowCount title="likes" />
          <ShowCount title="friends" />
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        Under Development
      </div>
    </Container>
  );
};

export default Page;
