import { DaffDocsNavList } from '@daffodil/docs-utils';

export const mockPackages: DaffDocsNavList = {
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
          path: 'packages/cart',
        },
        {
          id: 'install',
          title: 'Installation',
          children: [],
          path: 'packages/cart/install',
        },
        {
          id: 'testing',
          title: 'Testing',
          children: [],
          path: 'packages/cart/testing',
        },
      ],
    },
    {
      id: 'category',
      title: '@daffodil/category',
      children: [],
      path: 'packages/category',
    },
    {
      id: 'checkout',
      title: '@daffodil/checkout',
      children: [],
      path: 'packages/checkout',
    },
    {
      id: 'core',
      title: '@daffodil/core',
      children: [],
      path: 'packages/core',
    },
    {
      id: 'design',
      title: '@daffodil/design',
      children: [
        {
          id: '',
          title: 'Overview',
          children: [],
          path: 'packages/design',
        },
        {
          id: 'theming',
          title: 'Theming',
          children: [
            {
              id: 'installation',
              title: 'Daffodil Theming Installation Guide',
              children: [],
              path: 'packages/design/theming/installation',
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
          path: 'packages/product',
        },
        {
          id: 'in-memory-driver',
          title: 'Using the InMemory Driver',
          children: [],
          path: 'packages/product/in-memory-driver',
        },
      ],
    },
  ],
};
