import { expandTree } from './expand-tree';


describe('@daffodil/design/tree - hydrateTree', () => {
  it('should expand ui trees', () => {
    const dataProvider = [
      {
        data: { title: '', url: '', id: '', items: [], data: {}, open: false, parent: undefined },
        expected: { title: '', url: '', id: '', items: [], data: {}, open: true, parent: undefined },
      },
      {
        data: { title: '', url: '', id: '', items: [
          { title: '', url: '', id: '', items: [], data: {}, open: false, parent: undefined },
        ], data: {}, open: false, parent: undefined },
        expected: { title: '', url: '', id: '', items: [
          { title: '', url: '', id: '', items: [], data: {}, open: true, parent: undefined },
        ], data: {}, open: true, parent: undefined },
      },
    ];

    dataProvider.forEach((d) => {
      expect(expandTree(d.data)).toEqual(d.expected);
    });
  });

  it('should expand all ui subtrees if called on a subtree (mutably)', () => {
    const tree = { title: '', url: '', id: '', items: [
      { title: '', url: '', id: '', items: [], data: {}, open: true, parent: undefined },
    ], data: {}, open: false, parent: undefined };

    const result = { title: '', url: '', id: '', items: [
      { title: '', url: '', id: '', items: [], data: {}, open: true, parent: undefined },
    ], data: {}, open: false, parent: undefined };

    expandTree(tree.items[0]);

    expect(tree).toEqual(result);
  });
});
