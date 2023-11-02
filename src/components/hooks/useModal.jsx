import { create } from "zustand";

export const useModal = create((set) => ({
  isOpen: false,
  type: null,
  data: null,
  setOpen: ({ type, data }) => set((state) => ({ isOpen: true, type, data })),
  setClose: () => set((state) => ({ isOpen: false, type: null, data: null })),
}));
