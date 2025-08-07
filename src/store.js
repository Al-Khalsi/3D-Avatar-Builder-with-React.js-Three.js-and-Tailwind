import { create } from 'zustand';
import AvatarAPI from './data/api';

const useAvatarStore = create((set, get) => ({
  categories: [],
  currentCategory: null,
  assets: [],
  avatarConfig: {},
  isLoading: false,
  error: null,

  // actions
  fetchCategories: async () => {
    set({ isLoading: true, error: null });
    try {
      const components = await AvatarAPI.getComponents();
      const defaultAvatar = await AvatarAPI.getDefaultAvatar();
      
      // transform components into categories format
      const categories = Object.values(components).map(component => ({
        id: component.id,
        name: component.label,
        options: component.options
      }));

      set({ 
        categories,
        assets: categories, // assuming you want both categories and assets
        avatarConfig: defaultAvatar,
        isLoading: false 
      });
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },

  setCurrentCategory: (categoryId) => {
    const category = get().categories.find(c => c.id === categoryId);
    set({ currentCategory: category });
  },

  updateAvatarConfig: (partId, optionId) => {
    set(state => ({
      avatarConfig: {
        ...state.avatarConfig,
        [partId]: optionId
      }
    }));
  },

  saveAvatar: async () => {
    set({ isLoading: true });
    try {
      const { avatarConfig } = get();
      const result = await AvatarAPI.saveAvatar(avatarConfig);
      set({ isLoading: false });
      return result;
    } catch (err) {
      set({ error: err.message, isLoading: false });
      throw err;
    }
  },

  // initialize store
  initialize: async () => {
    await get().fetchCategories();
  }
}));

// initialize the store when it is created
useAvatarStore.getState().initialize();

export default useAvatarStore;