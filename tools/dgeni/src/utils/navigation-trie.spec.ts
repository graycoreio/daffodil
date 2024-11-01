import { DaffNavDoc } from '@daffodil/docs-utils';

import { generateNavigationTrieFromDocuments } from './navigation-trie';

describe('NavigationTrie', () => {
  let root: DaffNavDoc;
  const assertTriesAreEqual = (a, b) => expect(JSON.parse(JSON.stringify(a))).toEqual(JSON.parse(JSON.stringify(b)));

  beforeEach(() => {
    root = {
      id: '',
      title: '',
    };
  });

  describe('transformation of a NavigationDocument[] into a NavigationTrie', () => {
    it('should work with one document', () => {
      const documents: DaffNavDoc[] = [
        { id: 'cart', title: 'Overview', path: 'cart' },
      ];

      const expected = {
        id: '',
        title: '',
        children: [{ id: 'cart', title: 'Overview', path: 'cart', children: []}],
      };

      assertTriesAreEqual(generateNavigationTrieFromDocuments(documents, root), expected);
    });

    it('should work with nested documents', () => {
      const documents: DaffNavDoc[] = [
        { id: 'cart', title: '@daffodil/cart', path: 'cart' },
        { id: 'cart/install', title: 'Installing @daffodil/cart', path: 'cart/install' },
        { id: 'cart/testing', title: 'Testing Cart', path: 'cart/testing' },
      ];

      const expected = {
        id: '',
        title: '',
        children: [
          {
            id: 'cart',
            title: '@daffodil/cart',
            children: [
              { id: '', title: 'Overview', path: 'cart', children: []},
              { id: 'install', title: 'Installing @daffodil/cart', path: 'cart/install', children: []},
              { id: 'testing',  title: 'Testing Cart', path: 'cart/testing', children: []},
            ],
          },
        ],
      };

      assertTriesAreEqual(generateNavigationTrieFromDocuments(documents, root), expected);
    });
  });

  describe('moving parent documents into overview documents if there are children', () => {
    it('should work with a simple example', () => {
      interface TitledDoc extends DaffNavDoc{
        title: string;
      }

      const documents: TitledDoc[] = [
        { id: 'cart', title: '@daffodil/cart', path: 'cart' },
        { id: 'cart/install', title: 'Installing @daffodil/cart', path: 'cart/install' },
        { id: 'cart/testing', title: 'Testing Cart', path: 'cart/testing' },
      ];

      const expected = {
        id: '',
        title: '',
        children: [
          {
            id: 'cart',
            title: '@daffodil/cart',
            children: [
              { id: '', title: 'Overview', path: 'cart', children: []},
              { id: 'install', title: 'Installing @daffodil/cart', path: 'cart/install', children: []},
              { id: 'testing',  title: 'Testing Cart', path: 'cart/testing', children: []},
            ],
          },
        ],
      };

      const result = generateNavigationTrieFromDocuments(documents, root);
      assertTriesAreEqual(result, expected);
    });

    it('it should sort children into alphabetic order by id', () => {
      interface TitledDoc extends DaffNavDoc{
        title: string;
      }

      const documents: TitledDoc[] = [
        { id: 'cart/install', title: 'Installing @daffodil/cart', path: 'cart/install' },
        { id: 'cart', title: '@daffodil/cart', path: 'cart' },
        { id: 'cart/testing', title: 'Testing Cart', path: 'cart/testing' },
      ];

      const expected = {
        id: '',
        title: '',
        children: [
          {
            id: 'cart',
            title: '@daffodil/cart',
            children: [
              { id: '', title: 'Overview', path: 'cart', children: []},
              { id: 'install', title: 'Installing @daffodil/cart', path: 'cart/install', children: []},
              { id: 'testing',  title: 'Testing Cart', path: 'cart/testing', children: []},
            ],
          },
        ],
      };

      assertTriesAreEqual(generateNavigationTrieFromDocuments(documents, root), expected);
    });
  });

  describe('working with documents without parent documents', () => {
    it('create a tree with no titles', () => {
      const documents: DaffNavDoc[] = [
        { id: 'cart/install', title: 'Installing @daffodil/cart', path: 'cart/install' },
        { id: 'cart/testing', title: 'Testing Cart', path: 'cart/testing' },
      ];

      const expected = {
        id: '',
        title: '',
        children: [
          {
            id: 'cart',
            title: 'Cart',
            children: [
              { id: 'install', title: 'Installing @daffodil/cart', path: 'cart/install', children: []},
              { id: 'testing',  title: 'Testing Cart', path: 'cart/testing', children: []},
            ],
          },
        ],
      };
      const result = generateNavigationTrieFromDocuments(documents, root);
      assertTriesAreEqual(result, expected);
    });
  });

  it('should throw an exception if two documents with the same path are inserted', () => {
    const documents: DaffNavDoc[] = [
      { id: 'cart/testing', title: 'Installing @daffodil/cart', path: 'cart/testing' },
      { id: 'cart/testing', title: 'Testing Cart', path: 'cart/testing' },
    ];

    expect(() => generateNavigationTrieFromDocuments(documents, root))
      .toThrow(
        new Error('Error: attempted to insert a document with a duplicate path: cart/testing'),
      );
  });
});
