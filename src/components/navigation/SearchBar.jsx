import { BiArrowBack, BiSearch } from "react-icons/bi";
import IconButton from "../shared/IconButton";
import Backdrop from "../modal/shared/Backdrop";

const SearchBar = ({ setClose }) => {
  return (
    <>
      <div
        className={`w-full absolute top-0 left-0 flex items-center justify-center card md:bg-transparent px-4 p-2 z-10`}
      >
        <Backdrop
          className="z-40 bg-opacity-30"
          setClose={setClose}
          closeOnBackdropMd={true}
          closeOnBackdropSm={true}
        />
        <IconButton onClick={setClose} className="md:hidden relative z-40">
          <BiArrowBack size={30} />
        </IconButton>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative z-40 w-full md:w-[50%] flex items-center gap-x-1"
        >
          <input className="p-2 input-field" placeholder="Search here" />
          <button className="px-4 py-2 click rounded-md">
            <BiSearch size={30} />
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
