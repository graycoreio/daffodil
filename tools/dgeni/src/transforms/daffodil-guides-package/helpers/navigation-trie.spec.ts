import {
  NavigationDocument,
  generateNavigationTrieFromDocuments,
} from './navigation-trie';

describe('NavigationTrie', () => {

  const assertTriesAreEqual = (a, b) => expect(JSON.parse(JSON.stringify(a))).toEqual(JSON.parse(JSON.stringify(b)));

  describe('transformation of a NavigationDocument[] into a NavigationTrie', () => {
    it('should work with one document', () => {
      const documents: NavigationDocument[] = [
        { id: 'cart', title: 'Overview', path: 'cart', tableOfContents: '' },
      ];

      const expected = {
        id: '',
        title: '',
        tableOfContents: '',
        children: [{ id: 'cart', title: 'Overview', path: 'cart', tableOfContents: '', children: []}],
      };

      assertTriesAreEqual(generateNavigationTrieFromDocuments(documents), expected);
    });

    it('should work with nested documents', () => {
      const documents: NavigationDocument[] = [
        { id: 'cart', title: '@daffodil/cart', path: 'cart', tableOfContents: '' },
        { id: 'cart/install', title: 'Installing @daffodil/cart', path: 'cart/install', tableOfContents: '' },
        { id: 'cart/testing', title: 'Testing Cart', path: 'cart/testing', tableOfContents: '' },
      ];

      const expected = {
        id: '',
        title: '',
        tableOfContents: '',
        children: [
          {
            id: 'cart',
            title: '@daffodil/cart',
            tableOfContents: '',
            children: [
              { id: '', title: 'Overview', path: 'cart', children: [], tableOfContents: '' },
              { id: 'install', title: 'Installing @daffodil/cart', path: 'cart/install', children: [], tableOfContents: '' },
              { id: 'testing',  title: 'Testing Cart', path: 'cart/testing', children: [], tableOfContents: '' },
            ],
          },
        ],
      };

      assertTriesAreEqual(generateNavigationTrieFromDocuments(documents), expected);
    });
  });

  describe('moving parent documents into overview documents if there are children', () => {
    it('should work with a simple example', () => {
      interface TitledDoc extends NavigationDocument{
        title: string;
      }

      const documents: TitledDoc[] = [
        { id: 'cart', title: '@daffodil/cart', path: 'cart', tableOfContents: '' },
        { id: 'cart/install', title: 'Installing @daffodil/cart', path: 'cart/install', tableOfContents: '' },
        { id: 'cart/testing', title: 'Testing Cart', path: 'cart/testing', tableOfContents: '' },
      ];

      const expected = {
        id: '',
        title: '',
        tableOfContents: '',
        children: [
          {
            id: 'cart',
            title: '@daffodil/cart',
            tableOfContents: '',
            children: [
              { id: '', title: 'Overview', path: 'cart', children: [], tableOfContents: '' },
              { id: 'install', title: 'Installing @daffodil/cart', path: 'cart/install', children: [], tableOfContents: '' },
              { id: 'testing',  title: 'Testing Cart', path: 'cart/testing', children: [], tableOfContents: '' },
            ],
          },
        ],
      };

      assertTriesAreEqual(generateNavigationTrieFromDocuments(documents), expected);
    });

    it('it should sort children into alphabetic order by id', () => {
      interface TitledDoc extends NavigationDocument{
        title: string;
      }

      const documents: TitledDoc[] = [
        { id: 'cart/install', title: 'Installing @daffodil/cart', path: 'cart/install', tableOfContents: '' },
        { id: 'cart', title: '@daffodil/cart', path: 'cart', tableOfContents: '' },
        { id: 'cart/testing', title: 'Testing Cart', path: 'cart/testing', tableOfContents: '' },
      ];

      const expected = {
        id: '',
        title: '',
        tableOfContents: '',
        children: [
          {
            id: 'cart',
            title: '@daffodil/cart',
            tableOfContents: '',
            children: [
              { id: '', title: 'Overview', path: 'cart', children: [], tableOfContents: '' },
              { id: 'install', title: 'Installing @daffodil/cart', path: 'cart/install', children: [], tableOfContents: '' },
              { id: 'testing',  title: 'Testing Cart', path: 'cart/testing', children: [], tableOfContents: '' },
            ],
          },
        ],
      };

      assertTriesAreEqual(generateNavigationTrieFromDocuments(documents), expected);
    });
  });

  describe('working with documents without parent documents', () => {
    it('create a tree with no titles', () => {
      const documents: NavigationDocument[] = [
        { id: 'cart/install', title: 'Installing @daffodil/cart', path: 'cart/install', tableOfContents: '' },
        { id: 'cart/testing', title: 'Testing Cart', path: 'cart/testing', tableOfContents: '' },
      ];

      const expected = {
        id: '',
        title: '',
        tableOfContents: '',
        children: [
          {
            id: 'cart',
            title: 'Cart',
            tableOfContents: '',
            children: [
              { id: 'install', title: 'Installing @daffodil/cart', path: 'cart/install', children: [], tableOfContents: '' },
              { id: 'testing',  title: 'Testing Cart', path: 'cart/testing', children: [], tableOfContents: '' },
            ],
          },
        ],
      };

      assertTriesAreEqual(generateNavigationTrieFromDocuments(documents), expected);
    });
  });

  it('should throw an exception if two documents with the same path are inserted', () => {
    const documents: NavigationDocument[] = [
      { id: 'cart/testing', title: 'Installing @daffodil/cart', path: 'cart/testing', tableOfContents: '' },
      { id: 'cart/testing', title: 'Testing Cart', path: 'cart/testing', tableOfContents: '' },
    ];

    expect(() => generateNavigationTrieFromDocuments(documents))
      .toThrow(
        new Error('Error: attempted to insert a document with a duplicate path: cart/testing'),
      );
  });
});
