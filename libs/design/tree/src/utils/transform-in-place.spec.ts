import { daffTransformTreeInPlace } from './transform-in-place';

describe('@daffodil/design/tree - traverse', () => {
  it('should transforms trees (mutably)', () => {
    const dataProvider = [
      {
        data: { title: '', url: '', id: 'a', data: {}, items: []},
        count: 1,
        path: 'a1',
      },
      {
        data: { title: '', url: '', id: 'a', data: {}, items: [
          { title: '', url: '', id: 'b', items: [], data: {}},
          { title: '', url: '', id: 'c', items: [], data: {}},
        ]},
        count: 3,
        path: 'a1c2b3',
      },
      {
        data: { title: '', url: '', id: 'a', items: [
          { title: '', url: '', id: 'b', items: [
            { title: '', url: '', id: 'c', items: [], data: {}},
          ], data: {}},
        ], data: {}},
        count: 3,
        path: 'a1b2c3',
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
        path: 'a1b2c3d4',
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
        path: 'a1e2f3g4b5c6d7',
      },
    ];

    dataProvider.forEach((d) => {
      let count = 0;
      let path = '';

      const result = daffTransformTreeInPlace(d.data, (node) => {
        count++;
        node.id = node.id + count;
        path = path + node.id;
        return node;
      }, 'items');

      expect(d.data.id).toEqual(result.id);

      expect(count).toEqual(d.count);
      expect(path).toEqual(d.path);
    });
  });
});
