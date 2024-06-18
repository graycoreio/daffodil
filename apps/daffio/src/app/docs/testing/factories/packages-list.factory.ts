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
          children: undefined,
          path: 'packages/cart',
        },
        {
          id: 'install',
          title: 'Installation',
          children: undefined,
          path: 'packages/cart/install',
        },
        {
          id: 'testing',
          title: 'Testing',
          children: undefined,
          path: 'packages/cart/testing',
        },
      ],
    },
    {
      id: 'category',
      title: '@daffodil/category',
      children: undefined,
      path: 'packages/category',
    },
    {
      id: 'checkout',
      title: '@daffodil/checkout',
      children: undefined,
      path: 'packages/checkout',
    },
    {
      id: 'core',
      title: '@daffodil/core',
      children: undefined,
      path: 'packages/core',
    },
    {
      id: 'design',
      title: '@daffodil/design',
      children: [
        {
          id: '',
          title: 'Overview',
          children: undefined,
          path: 'packages/design',
        },
        {
          id: 'theming',
          title: 'Theming',
          children: [
            {
              id: 'installation',
              title: 'Daffodil Theming Installation Guide',
              children: undefined,
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
          children: undefined,
          path: 'packages/product',
        },
        {
          id: 'in-memory-driver',
          title: 'Using the InMemory Driver',
          children: undefined,
          path: 'packages/product/in-memory-driver',
        },
      ],
    },
  ],
};
