import ModalProvider from "@/components/providers/ModalProvider";

const layout = ({ children }) => {
  return (
    <>
      <ModalProvider />
      {children}
    </>
  );
};

export default layout;
