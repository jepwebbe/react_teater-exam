import { create } from "zustand";

// laver en state, der tager set som argument til at opdatere
export const useRenderStore = create((set, get) => ({
  render: true,
  setRender: (value) => set({ render: value }),}));