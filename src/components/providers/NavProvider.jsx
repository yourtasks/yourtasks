import NavigationBar from "../navigation/NavigationBar";
import RightBar from "../navigation/RightBar";
import TopBar from "../navigation/TopBar";

const NavProvider = ({ children }) => {
  return (
    <section className="w-full h-full flex flex-col overflow-hidden">
      <TopBar />
      <div className="w-full h-full flex">
        <div className="absolute sm:static md:w-6/12 lg:w-3/12 h-full">
          <NavigationBar />
        </div>
        <div className="w-full lg:w-6/12 h-full flex items-center">
          {children}
        </div>
        <div className="hidden lg:block lg:w-3/12">
          <RightBar />
        </div>
      </div>
    </section>
  );
};

export default NavProvider;
