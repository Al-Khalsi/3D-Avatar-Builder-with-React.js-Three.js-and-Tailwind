import { create } from 'zustand';

const useStore = create((set) => ({
  categories: [],
  currentCategories: null,
  assets: [],
  fetchCategories: async () => {

  }
}));

export default useStore;