import { create } from "zustand";

const useLoaderStore = create((set) => ({
    isLoading: false,
    setLoading: (isLoading) => set({ isLoading }),
}));

export default useLoaderStore;