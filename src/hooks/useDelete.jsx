import { create } from "zustand";

export const useDeleteModal = create((set) => ({
  isOpen: false,
  data: null,
  setOpen: (data) => set((state) => ({ isOpen: true, data })),
  setClose: () => set((state) => ({ isOpen: false, data: null })),
}));
