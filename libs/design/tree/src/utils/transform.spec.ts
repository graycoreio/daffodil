import { daffTransformTree } from './transform';
import { DaffTreeData } from '../interfaces/tree-data';

describe('daffTransformTree', () => {
  it('should transform a tree like structure into a DaffTreeData', () => {
    const myTree = {
      name: 'Test',
      link: '/test.html',
      carbonScore: 1,
      children: [{
        name: 'Test 2',
        link: '/test2.html',
        carbonScore: 2,
        children: [],
      }],
    };
    const transformer = (node: typeof myTree): DaffTreeData<{ carbonScore: number}> => ({
      title: node.name,
      url: node.link,
      id: node.name,
      items: [],
      data: {
        carbonScore: node.carbonScore,
      },
    });

    expect(daffTransformTree(myTree, transformer, 'children')).toEqual({
      title: 'Test',
      url: '/test.html',
      data: {
        carbonScore: 1,
      },
      items: [
        {
          title: 'Test 2',
          url: '/test2.html',
          data: {
            carbonScore: 2,
          },
          items: [],
          id: 'Test 2',
        },
      ],
      id: 'Test',
    });
  });

  it('should transform a more complex tree structure into a DaffTreeData', () => {
    const myTree = {
      name: 'Test',
      link: '/test.html',
      carbonScore: 1,
      children: [
        {
          name: 'Test 2',
          link: '/test2.html',
          carbonScore: 2,
          children: [],
        },
        {
          name: 'Test 3',
          link: '/test3.html',
          carbonScore: 3,
          children: [
            {
              name: 'Test 4',
              link: '/test4.html',
              carbonScore: 4,
              children: [],
            },
            {
              name: 'Test 5',
              link: '/test5.html',
              carbonScore: 5,
              children: [],
            },
          ],
        },
      ],
    };
    const transformer = (node: typeof myTree): DaffTreeData<{ carbonScore: number}> => ({
      title: node.name,
      url: node.link,
      id: node.name,
      items: [],
      data: {
        carbonScore: node.carbonScore,
      },
    });

    expect(daffTransformTree(myTree, transformer, 'children')).toEqual({
      title: 'Test',
      url: '/test.html',
      data: {
        carbonScore: 1,
      },
      items: [
        {
          title: 'Test 2',
          url: '/test2.html',
          data: {
            carbonScore: 2,
          },
          items: [],
          id: 'Test 2',
        },
        {
          title: 'Test 3',
          url: '/test3.html',
          data: {
            carbonScore: 3,
          },
          items: [
            {
              title: 'Test 4',
              url: '/test4.html',
              data: {
                carbonScore: 4,
              },
              items: [],
              id: 'Test 4',
            },
            {
              title: 'Test 5',
              url: '/test5.html',
              data: {
                carbonScore: 5,
              },
              items: [],
              id: 'Test 5',
            },
          ],
          id: 'Test 3',
        },
      ],
      id: 'Test',
    });
  });

  it('should not modify the original tree structure', () => {
    const myTree = {
      name: 'test',
      tacos: 1,
      items: [],
    };
    Object.freeze(myTree);
    const transform = (t: typeof myTree): DaffTreeData<{ tacos: number}> => ({
      title: t.name,
      url: '',
      id: '',
      items: [],
      data: {
        tacos: t.tacos,
      },
    });
    expect(() => daffTransformTree(myTree, transform, 'items')).not.toThrowError();
  });

  it('should allow you to add more items during transform', () => {
    const myTree = {
      name: 'test',
      tacos: 1,
      items: [
        {
          name: 'test',
          tacos: 2,
          items: [],
        },
      ],
    };
    const transform = (t: typeof myTree): DaffTreeData<{ tacos: number}> => {
      const items = t.tacos === 1 ? [
        {
          title: 'test',
          url: '',
          id: '',
          items: [],
          data: {
            tacos: 3,
          },
        },
      ] : [];
      return {
        title: t.name,
        url: '',
        id: '',
        items,
        data: {
          tacos: t.tacos,
        },
      };
    };

    expect(daffTransformTree(myTree, transform, 'items')).toEqual({
      title: 'test',
      url: '',
      id: '',
      items: [
        {
          title: 'test',
          url: '',
          id: '',
          items: [],
          data: {
            tacos: 3,
          },
        },
        {
          title: 'test',
          url: '',
          id: '',
          items: [],
          data: {
            tacos: 2,
          },
        },
      ],
      data: {
        tacos: 1,
      },
    });
  });
});
