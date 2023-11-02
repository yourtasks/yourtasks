"use client";
import { usePathname } from "next/navigation";
import NavigationBar from "../navigation/NavigationBar";
import RightBar from "../navigation/RightBar";
import TopBar from "../navigation/TopBar";
import { hideNavigation } from "../navigation/hideNavigation";

const NavProvider = ({ children }) => {
  const pathname = usePathname();
  const hide = hideNavigation.some((item) => pathname.includes(item));

  return (
    <section className="w-full h-full flex flex-col">
      <TopBar />
      <div className="w-full h-full flex overflow-hidden">
        {!hide && <NavigationBar />}
        <div
          className={`w-full ${
            hide ? "lg:w-full" : "lg:w-6/12"
          } h-full flex items-center overflow-y-auto`}
        >
          {children}
        </div>
        {!hide && <RightBar />}
      </div>
    </section>
  );
};

export default NavProvider;
