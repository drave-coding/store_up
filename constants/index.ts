export const navItems = [
    {
      name: 'Dashboard',
      icon: '/assets/icons/dashboard.svg',
      url: '/',
    },
    {
      name: 'Documents',
      icon: '/assets/icons/documents.svg',
      url: '/documents',
    },
    {
      name: 'Images',
      icon: '/assets/icons/images.svg',
      url: '/images',
    },
    {
      name: 'Media',
      icon: '/assets/icons/video.svg',
      url: '/media',
    },
    {
      name: 'Others',
      icon: '/assets/icons/others.svg',
      url: '/others',
    },
  ];
  
  export const actionsDropdownItems = [
    {
      label: 'Rename',
      icon: '/assets/icons/edit.svg',
      value: 'rename',
    },
    {
      label: 'Details',
      icon: '/assets/icons/info.svg',
      value: 'details',
    },
    {
      label: 'Share',
      icon: '/assets/icons/share.svg',
      value: 'share',
    },
    {
      label: 'Download',
      icon: '/assets/icons/download.svg',
      value: 'download',
    },
    {
      label: 'Delete',
      icon: '/assets/icons/delete.svg',
      value: 'delete',
    },
  ];
  
  export const sortTypes = [
    {
      label: 'Date created (newest)',
      value: '$createdAt-desc',
    },
    {
      label: 'Created Date (oldest)',
      value: '$createdAt-asc',
    },
    {
      label: 'Name (A-Z)',
      value: 'name-asc',
    },
    {
      label: 'Name (Z-A)',
      value: 'name-desc',
    },
    {
      label: 'Size (Highest)',
      value: 'size-desc',
    },
    {
      label: 'Size (Lowest)',
      value: 'size-asc',
    },
  ];
  
  export const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

  export const avatarPlaceholder = "data:image/jpeg;base64,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"