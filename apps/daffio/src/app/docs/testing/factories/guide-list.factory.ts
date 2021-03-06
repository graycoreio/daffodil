export const mockGuides = {
  id: '',
  title: '',
  children: [
    {
      id: 'cart',
      title: '@daffodil/cart',
      children: [
        {
          id: '',
          title: 'Overview',
          children: [],
          path: 'guides/cart',
        },
        {
          id: 'install',
          title: 'Installation',
          children: [],
          path: 'guides/cart/install',
        },
        {
          id: 'testing',
          title: 'Testing',
          children: [],
          path: 'guides/cart/testing',
        },
      ],
    },
    {
      id: 'category',
      title: '@daffodil/category',
      children: [],
      path: 'guides/category',
    },
    {
      id: 'checkout',
      title: '@daffodil/checkout',
      children: [],
      path: 'guides/checkout',
    },
    {
      id: 'core',
      title: '@daffodil/core',
      children: [],
      path: 'guides/core',
    },
    {
      id: 'design',
      title: '@daffodil/design',
      children: [
        {
          id: '',
          title: 'Overview',
          children: [],
          path: 'guides/design',
        },
        {
          id: 'theming',
          title: 'Theming',
          children: [
            {
              id: 'installation',
              title: 'Daffodil Theming Installation Guide',
              children: [],
              path: 'guides/design/theming/installation',
            },
          ],
        },
      ],
    },
    {
      id: 'product',
      title: '@daffodil/product',
      children: [
        {
          id: '',
          title: 'Overview',
          children: [],
          path: 'guides/product',
        },
        {
          id: 'in-memory-driver',
          title: 'Using the InMemory Driver',
          children: [],
          path: 'guides/product/in-memory-driver',
        },
      ],
    },
  ],
};
