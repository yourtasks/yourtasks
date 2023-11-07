import NavProvider from "@/components/providers/NavProvider";

const layout = ({ children }) => {
  return <NavProvider>{children}</NavProvider>;
};

export default layout;
