import { create } from "zustand";

interface ContactStore {
  showContact: boolean;
  setShowContact: (value: boolean) => void;
}

export const useContactStore = create<ContactStore>((set) => ({
  showContact: false,
  setShowContact: (value) => set({ showContact: value }),
}));
