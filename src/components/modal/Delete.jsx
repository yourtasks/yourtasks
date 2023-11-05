"use client";
import Container from "@/components/modal/shared/Container";
import Backdrop from "./shared/Backdrop";
import { useModal } from "@/hooks/useModal";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import toast from "react-hot-toast";

const Delete = () => {
  const { isOpen, type, data, setClose } = useModal();
  const [loading, setLoading] = useState(false);

  const handleDelete = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Post has been deleted");
      setClose();
    }, 2000);
  };

  if (isOpen && type === "delete-post")
    return (
      <Backdrop className="flex items-center justify-center bg-opacity-70 dark:bg-opacity-70">
        <Container className="sm:w-5/12 flex flex-col gap-y-2 border-2 border-color">
          <h1 className="font-semibold text-lg opacity-70">Delete?</h1>
          <p className="font-medium">Are you sure you want to delete this?</p>
          <div className="w-full flex justify-between gap-x-4 px-4 text-sm font-semibold">
            {loading ? (
              <div className="opacity-60 w-full py-2 flex items-center justify-center gap-x-2">
                <div className="w-fit h-fit animate-spin">
                  <AiOutlineLoading />
                </div>
                <p className="capitalize">Deleting {data.item}</p>
              </div>
            ) : (
              <>
                <button
                  onClick={handleDelete}
                  className="py-2 w-full button bg-rose-500 dark:bg-rose-600"
                >
                  Yes
                </button>
                <button
                  onClick={setClose}
                  className="py-2 w-full text-button rounded-md"
                >
                  No
                </button>
              </>
            )}
          </div>
        </Container>
      </Backdrop>
    );
};

export default Delete;
