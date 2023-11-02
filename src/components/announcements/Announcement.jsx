import { BiShare, BiTimeFive } from "react-icons/bi";
import FooterItem from "../post/FooterItem";
import UserItem from "../users/UserItem";
import { BsCalendarEvent, BsEyeFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const Announcement = () => {
  return (
    <div className="w-full flex flex-col gap-y-2 card no-select rounded-lg border-[1px] border-color">
      <div className="w-full flex flex-col gap-y-2 click p-2 rounded-t-lg">
        <div className="flex items-center justify-between opacity-60  text-xs font-medium px-2">
          <div className="flex items-center gap-x-2 ">
            <BsCalendarEvent size={12} />
            <p className="">12 May 2023</p>
            <BiTimeFive size={12} />
            <p className="">03:30 am</p>
          </div>
          <div className="flex items-center gap-x-2">
            <BsEyeFill size={12} />
            <p>12</p>
          </div>
        </div>
        <div className="w-full flex items-center gap-x-2">
          <div className="relative w-[70px] h-[70px]">
            <Image
              src={"/profile.jpg"}
              alt="alt"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <Link
            href={`/announcements/41a5s4dasd1a2s4/view`}
            className="flex flex-col gap-y-1 w-full"
          >
            <h1 className="font-semibold">Title of the announcement</h1>
            <p className="text-sm opacity-70 line-clamp-2">
              Description of the announcement
            </p>
          </Link>
        </div>
      </div>
      <div className="w-full flex items-center justify-between pb-2 px-2">
        <UserItem className="max-w-[70%] text-xs w-fit px-4" />
        <FooterItem
          count={15}
          className="w-fit px-4 py-2"
          Icon={<BiShare size={20} />}
        />
      </div>
    </div>
  );
};

export default Announcement;
