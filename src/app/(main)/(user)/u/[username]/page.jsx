import AboutItem from "@/components/profile/AboutItem";
import Avatar from "@/components/shared/Avatar";
import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import ShowCount from "@/components/users/ShowCount";
import { BiSolidBadgeCheck, BiSolidCake } from "react-icons/bi";
import { BsTelephoneFill } from "react-icons/bs";
import { ImHome3 } from "react-icons/im";
import { MdLocationPin } from "react-icons/md";

const Page = () => {
  return (
    <Container className="md:py-4">
      <div className="w-full h-full flex flex-col p-4 card sm:rounded-lg">
        <h1 className="text-xl font-bold opacity-90">About</h1>
        <div className="w-full py-4 flex flex-col gap-y-4">
          <AboutItem Icon={<ImHome3 />} prefix="Lives in" title="Badda" />
          <AboutItem
            Icon={<MdLocationPin />}
            prefix="From"
            title="Gazipur, Dhaka"
          />
          <AboutItem
            Icon={<BsTelephoneFill />}
            title="01720246172"
            bottom="Mobile"
          />
          <AboutItem
            Icon={<BiSolidCake />}
            prefix="Birthday is in"
            title="2 days"
          />
        </div>
      </div>
    </Container>
  );
};

export default Page;
