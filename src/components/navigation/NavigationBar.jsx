"use client";

import { BiDonateBlood, BiSolidDonateBlood } from "react-icons/bi";
import NavItem from "./NavItem";
import {
  MdCampaign,
  MdGroups,
  MdHome,
  MdOutlineCampaign,
  MdOutlineGroups,
  MdOutlineHome,
  MdOutlineTask,
  MdTask,
} from "react-icons/md";
import { usePathname } from "next/navigation";

const NavigationBar = () => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <div className="px-2 fixed z-40 bottom-0 left-0 sm:static sm:h-full w-full overflow-y-auto card sm:p-2 md:p-4 flex sm:flex-col gap-y-2 gap-x-1">
      <NavItem
        Icon={<MdOutlineHome size={30} />}
        activeIcon={<MdHome size={30} />}
        title="Home"
        current={pathname}
        href={`/`}
      />
      <NavItem
        Icon={<MdOutlineCampaign size={30} />}
        activeIcon={<MdCampaign size={30} />}
        title="Notice"
        current={pathname}
        href={`/announcements`}
      />
      <NavItem
        Icon={<MdOutlineTask size={30} />}
        activeIcon={<MdTask size={30} />}
        title="Tasks"
        current={pathname}
        href={`/tasks`}
      />
      <NavItem
        Icon={<MdOutlineGroups size={30} />}
        activeIcon={<MdGroups size={30} />}
        title="Community"
        current={pathname}
        href={`/community`}
      />
      <div className="hidden sm:block">
        <NavItem
          Icon={<BiDonateBlood size={30} />}
          activeIcon={<BiSolidDonateBlood size={30} />}
          title="Blood Emergency"
          current={pathname}
          href={`/blood-emergency`}
        />
      </div>
    </div>
  );
};

export default NavigationBar;
