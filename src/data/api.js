// Initial data for avatar components
const avatarData = {
  components: {
    head: {
      id: 'head',
      label: 'Head',
      options: [
        { id: 'head-1', label: 'Round Head', thumbnail: '/assets/heads/head-1.png' },
        { id: 'head-2', label: 'Square Head', thumbnail: '/assets/heads/head-2.png' },
        { id: 'head-3', label: 'Triangular Head', thumbnail: '/assets/heads/head-3.png' }
      ]
    },
    hair: {
      id: 'hair',
      label: 'Hair',
      options: [
        { id: 'hair-1', label: 'Short Hair', thumbnail: '/assets/hair/hair-1.png' },
        { id: 'hair-2', label: 'Long Hair', thumbnail: '/assets/hair/hair-2.png' },
        { id: 'hair-3', label: 'No Hair', thumbnail: '/assets/hair/hair-3.png' }
      ]
    },
    hand: {
      id: 'hand',
      label: 'Hand',
      options: [
        { id: 'hand-1', label: 'Normal Hand', thumbnail: '/assets/hands/hand-1.png' },
        { id: 'hand-2', label: 'Mechanical Hand', thumbnail: '/assets/hands/hand-2.png' }
      ]
    },
    leg: {
      id: 'leg',
      label: 'Leg',
      options: [
        { id: 'leg-1', label: 'Normal Leg', thumbnail: '/assets/legs/leg-1.png' },
        { id: 'leg-2', label: 'Mechanical Leg', thumbnail: '/assets/legs/leg-2.png' }
      ]
    },
    skinColor: {
      id: 'skinColor',
      label: 'Skin Color',
      options: [
        { id: 'skin-1', label: 'Light', color: '#FFDBAC' },
        { id: 'skin-2', label: 'Medium', color: '#E5BA73' },
        { id: 'skin-3', label: 'Dark', color: '#C68642' }
      ]
    }
  },
  // Default avatar state
  defaultAvatar: {
    head: 'head-1',
    hair: 'hair-1',
    hand: 'hand-1',
    leg: 'leg-1',
    skinColor: 'skin-2'
  }
};

// API simulation using Promise
const AvatarAPI = {
  // Get all editable components
  getComponents: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(avatarData.components);
      }, 300); // Simulated delay for more realistic behavior
    });
  },

  // Get default avatar state
  getDefaultAvatar: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(avatarData.defaultAvatar);
      }, 300);
    });
  },

  // Save avatar changes (in this local version, only in temporary memory)
  saveAvatar: (avatarConfig) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Avatar configuration saved:', avatarConfig);
        resolve({ success: true, avatarConfig });
      }, 500);
    });
  }
};

export default AvatarAPI;