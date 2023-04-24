import { collapseTree } from './collapse-tree';


describe('@daffodil/design/tree - hydrateTree', () => {
  it('should collapse ui trees', () => {
    const dataProvider = [
      {
        data: { title: '', url: '', id: '', items: [], data: {}, open: true, parent: undefined },
        expected: { title: '', url: '', id: '', items: [], data: {}, open: false, parent: undefined },
      },
      {
        data: { title: '', url: '', id: '', items: [
          { title: '', url: '', id: '', items: [], data: {}, open: true, parent: undefined },
        ], data: {}, open: true, parent: undefined },
        expected: { title: '', url: '', id: '', items: [
          { title: '', url: '', id: '', items: [], data: {}, open: false, parent: undefined },
        ], data: {}, open: false, parent: undefined },
      },
    ];

    dataProvider.forEach((d) => {
      expect(collapseTree(d.data)).toEqual(d.expected);
    });
  });

  it('should collapse ui subtrees if called on a subtree (mutably)', () => {
    const tree = { title: '', url: '', id: '', items: [
      { title: '', url: '', id: '', items: [], data: {}, open: true, parent: undefined },
    ], data: {}, open: true, parent: undefined };

    const result = { title: '', url: '', id: '', items: [
      { title: '', url: '', id: '', items: [], data: {}, open: false, parent: undefined },
    ], data: {}, open: true, parent: undefined };

    collapseTree(tree.items[0]);

    expect(tree).toEqual(result);
  });
});
