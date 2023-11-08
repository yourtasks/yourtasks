import { twMerge } from "tailwind-merge";

const Backdrop = ({
  children,
  className,
  setClose,
  closeOnBackdropMd,
  closeOnBackdropSm,
}) => {
  return (
    <div
      className={twMerge(
        "fixed top-0 left-0 w-full h-full z-40 bg flex flex-col items-center justify-end sm:justify-center",
        className
      )}
    >
      {setClose && (
        <div
          className={`absolute w-full h-full ${
            !closeOnBackdropMd && "sm:hidden"
          } ${!closeOnBackdropSm && "hidden"}`}
          onClick={(e) => {
            e.stopPropagation();
            setClose();
          }}
        />
      )}
      {children}
    </div>
  );
};

export default Backdrop;
