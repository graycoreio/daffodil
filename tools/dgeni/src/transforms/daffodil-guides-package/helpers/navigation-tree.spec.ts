import { NavigationDocument, NavigationTree } from "./navigation-tree";

describe('NavigationTree', () => {

  const assertTriesAreEqual = (a, b) => expect(JSON.parse(JSON.stringify(a))).toEqual(JSON.parse(JSON.stringify(b)));

  describe('transformation of a NavigationDocument[] into a NavigationTree', () => {
    it('should work with one document', () => {  
      const documents: NavigationDocument[] = [
        { id: 'cart', title: 'Overview', path: 'cart' }
      ];

      const expected = {
        id: '',
        title: '',
        children: [{ id: 'cart', title: 'Overview', path: 'cart', children: [] }],
      }

      assertTriesAreEqual(NavigationTree.generateTreeFromDocuments(documents), expected);
    });

    it('should work with nested documents', () => {
      const documents: NavigationDocument[] = [
        { id: 'cart', title: '@daffodil/cart', path: 'cart' },
        { id: 'cart/install', title: 'Installing @daffodil/cart', path: 'cart/install' },
        { id: 'cart/testing', title: 'Testing Cart', path: 'cart/testing' }
      ];
  
      const expected = {
        id: '',
        title: '',
        children: [
          {
            id: 'cart', 
            title: '@daffodil/cart',
            children: [
              { id: '', title: 'Overview', path: 'cart', children: [] },
              { id: 'install', title: 'Installing @daffodil/cart', path: 'cart/install', children: [] },
              { id: 'testing',  title: 'Testing Cart', path: 'cart/testing', children: [] },
            ]
          },
        ]
      }
  
      assertTriesAreEqual(NavigationTree.generateTreeFromDocuments(documents), expected);
    })
  });

  describe('moving parent documents into overview documents if there are children', () => {
    it('should work with a simple example', () => {
      interface TitledDoc extends NavigationDocument{
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
                { id: '', title: 'Overview', path: 'cart', children: [] },
                { id: 'install', title: 'Installing @daffodil/cart', path: 'cart/install', children: [] },
                { id: 'testing',  title: 'Testing Cart', path: 'cart/testing', children: [] },
              ]
            },
          ]
      }
      
      assertTriesAreEqual(NavigationTree.generateTreeFromDocuments(documents), expected);
    });

    it('it should sort children into alphabetic order by id', () => {
      interface TitledDoc extends NavigationDocument{
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
              { id: '', title: 'Overview', path: 'cart', children: [] },
              { id: 'install', title: 'Installing @daffodil/cart', path: 'cart/install', children: [] },
              { id: 'testing',  title: 'Testing Cart', path: 'cart/testing', children: [] },
            ]
          },
        ]
      }
  
      assertTriesAreEqual(NavigationTree.generateTreeFromDocuments(documents), expected);
    });
  });

  describe('working with documents without parent documents', () => {
    it('create a tree with no titles', () => {
      const documents: NavigationDocument[] = [
        { id: 'cart/install', title: 'Installing @daffodil/cart', path: 'cart/install' },
        { id: 'cart/testing', title: 'Testing Cart', path: 'cart/testing' }
      ];

      const expected = {
        id: '',
        title: '',
        children: [
          {
            id: 'cart', 
            title: 'Cart',
            children: [
              { id: 'install', title: 'Installing @daffodil/cart', path: 'cart/install', children: [] },
              { id: 'testing',  title: 'Testing Cart', path: 'cart/testing', children: [] },
            ]
          },
        ]
      }
  
      assertTriesAreEqual(NavigationTree.generateTreeFromDocuments(documents), expected);
    })
  });
});