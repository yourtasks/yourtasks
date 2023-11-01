import NavigationBar from "../navigation/NavigationBar";
import RightBar from "../navigation/RightBar";
import TopBar from "../navigation/TopBar";

const NavProvider = ({ children }) => {
  return (
    <section className="w-full h-full flex flex-col">
      <TopBar />
      <div className="w-full h-full flex overflow-hidden">
        <NavigationBar />
        <div className="w-full lg:w-6/12 h-full flex items-center overflow-y-auto">
          {children}
        </div>
        <RightBar />
      </div>
    </section>
  );
};

export default NavProvider;
