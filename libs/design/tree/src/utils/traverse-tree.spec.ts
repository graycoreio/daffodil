import { traverse } from './traverse-tree';

describe('@daffodil/design/tree - traverse', () => {
  it('should traverse trees pre-order, right-to-left', () => {
    const dataProvider = [
      {
        data: { title: '', url: '', id: 'a', data: {}, items: []},
        count: 1,
        path: 'a',
      },
      {
        data: { title: '', url: '', id: 'a', data: {}, items: [
          { title: '', url: '', id: 'b', items: [], data: {}},
          { title: '', url: '', id: 'c', items: [], data: {}},
        ]},
        count: 3,
        path: 'acb',
      },
      {
        data: { title: '', url: '', id: 'a', items: [
          { title: '', url: '', id: 'b', items: [
            { title: '', url: '', id: 'c', items: [], data: {}},
          ], data: {}},
        ], data: {}},
        count: 3,
        path: 'abc',
      },
      {
        data: { title: '', url: '', id: 'a', items: [
          { title: '', url: '', id: 'b', items: [
            { title: '', url: '', id: 'c', items: [
              { title: '', url: '', id: 'd', data: {}, items: []},
            ], data: {}},
          ], data: {}},
        ], data: {}},
        count: 4,
        path: 'abcd',
      },
      {
        data: { title: '', url: '', id: 'a', items: [
          { title: '', url: '', id: 'b', items: [
            { title: '', url: '', id: 'c', items: [
              { title: '', url: '', id: 'd', data: {}, items: []},
            ], data: {}},
          ], data: {}},
          { title: '', url: '', id: 'e', items: [
            { title: '', url: '', id: 'f', items: [
              { title: '', url: '', id: 'g', data: {}, items: []},
            ], data: {}},
          ], data: {}},
        ], data: {}},
        count: 7,
        path: 'aefgbcd',
      },
    ];

    dataProvider.forEach((d) => {
      let count = 0;
      let path = '';

      traverse(d.data, (node) => {
        count++;
        path = path + node.id;
        return node;
      }, 'items');

      expect(count).toEqual(d.count);
      expect(path).toEqual(d.path);
    });
  });
});
