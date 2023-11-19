"use client";

import { BiDonateBlood, BiSolidDonateBlood } from "react-icons/bi";
import NavItem from "./NavItem";
import {
  MdCampaign,
  MdGroups,
  MdHome,
  MdHowToVote,
  MdOutlineCampaign,
  MdOutlineGroups,
  MdOutlineHome,
  MdOutlineHowToVote,
  MdOutlineTask,
  MdTask,
} from "react-icons/md";
import { usePathname } from "next/navigation";
import { hideNavigation } from "./hideNavigation";

const NavigationBar = () => {
  const pathname = usePathname();
  const path = pathname === "/" ? "/" : pathname.split("/")[1];

  const hide = hideNavigation.some((item) => pathname.includes(item));

  return (
    <div className="absolute sm:static md:w-4/12 lg:w-3/12 h-full">
      {!hide && (
        <div className="px-2 border-[1px] border-color sm:border-transparent fixed z-40 bottom-0 left-0 sm:static sm:h-full w-full sm:overflow-y-auto card sm:p-2 md:p-4 flex justify-between sm:justify-normal sm:flex-col gap-y-2 gap-x-1 backdrop-blur-sm">
          <NavItem
            Icon={<MdOutlineHome size={30} />}
            activeIcon={<MdHome size={30} />}
            title="Home"
            current={path}
            href={`/`}
          />
          <NavItem
            Icon={<MdOutlineCampaign size={30} />}
            activeIcon={<MdCampaign size={30} />}
            title="Notice"
            current={path}
            href={`announcements`}
          />
          <NavItem
            Icon={<MdOutlineTask size={30} />}
            activeIcon={<MdTask size={30} />}
            title="Tasks"
            current={path}
            href={`tasks`}
            count={9}
          />
          <NavItem
            Icon={<MdOutlineGroups size={30} />}
            activeIcon={<MdGroups size={30} />}
            title="Community"
            current={path}
            href={`community`}
          />
          <div className="hidden sm:block w-1/4 sm:w-full">
            <NavItem
              Icon={<BiDonateBlood size={30} />}
              activeIcon={<BiSolidDonateBlood size={30} />}
              title="Blood Emergency"
              current={path}
              href={`blood-emergency`}
              className="w-full"
            />
          </div>
          <div className="hidden sm:block w-1/4 sm:w-full">
            <NavItem
              Icon={<MdOutlineHowToVote size={30} />}
              activeIcon={<MdHowToVote size={30} />}
              title="Votes/Polls"
              current={path}
              href={`votes`}
              className="w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;
