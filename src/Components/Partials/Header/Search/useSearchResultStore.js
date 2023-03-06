import { create } from "zustand";

// laver en state, der tager set som argument til at opdatere
export const useSearchResultsStore = create((set, get) => ({
  searchResults: [],
  setSearchResults: (results) => set({ searchResults: results }),
}));

