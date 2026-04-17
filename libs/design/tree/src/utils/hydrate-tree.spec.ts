import { hydrateTree } from './hydrate-tree';
import { traverse } from './traverse-tree';

describe('@daffodil/design/tree - hydrateTree', () => {
  it('should hydrate data trees into ui trees', () => {
    const dataProvider = [
      { data: { title: '', url: '', id: '', items: [], data: {}}, ui: { title: '', url: '', id: '', items: [], data: {}, open: true, parent: undefined }},
    ];

    dataProvider.forEach((d) => {
      const uiTree = hydrateTree(d.data);
      expect(uiTree).toEqual(d.ui);
    });
  });

  it('should have the same number of elements in the tree', () => {
    const dataProvider = [
      { data: { title: '', url: '', id: '', data: {}, items: []}},
      { data: { title: '', url: '', id: '', data: {}, items: [
        { title: '', url: '', id: '', items: [], data: {}},
        { title: '', url: '', id: '', items: [], data: {}},
      ]}},
      { data: { title: '', url: '', id: '', items: [
        { title: '', url: '', id: '', items: [
          { title: '', url: '', id: '', items: [], data: {}},
        ], data: {}},
      ], data: {}}},
      { data: { title: '', url: '', id: '', items: [
        { title: '', url: '', id: '', items: [
          { title: '', url: '', id: '', items: [
            { title: '', url: '', id: '', data: {}, items: []},
          ], data: {}},
        ], data: {}},
      ], data: {}}},
    ];

    dataProvider.forEach((d) => {
      const uiTree = hydrateTree(d.data);
      let uiCount = 0;
      let dataCount = 0;
      traverse(d.data, (el) => {
        dataCount++; return el;
      }, 'items');
      traverse(uiTree, (el) => {
        uiCount++; return el;
      }, 'items');
      expect(uiCount).toEqual(dataCount);
    });
  });

  describe('node IDs', () => {
    it('should use the treeId as the root node ID when provided', () => {
      const data = { title: 'Root', url: '', id: 'root', items: [], data: {}};
      const uiTree = hydrateTree(data, 'my-tree');
      expect(uiTree.id).toEqual('my-tree');
    });

    it('should fall back to the data id for the root node when treeId is not provided', () => {
      const data = { title: 'Root', url: '', id: 'root', items: [], data: {}};
      const uiTree = hydrateTree(data);
      expect(uiTree.id).toEqual('root');
    });

    it('should fall back to the data title for the root node when treeId and id are nullish', () => {
      const data = { title: 'Root', url: '', id: undefined, items: [], data: {}};
      const uiTree = hydrateTree(data);
      expect(uiTree.id).toEqual('Root');
    });

    it('should prefix child node IDs with their parent ID', () => {
      const data = { title: 'Root', url: '', id: 'root', items: [
        { title: 'Child A', url: '', id: 'a', items: [], data: {}},
      ], data: {}};
      const uiTree = hydrateTree(data, 'my-tree');
      expect(uiTree.items[0].id).toEqual('my-tree.a');
    });

    it('should build nested IDs through the full ancestor chain', () => {
      const data = { title: 'Root', url: '', id: 'root', items: [
        { title: 'Child A', url: '', id: 'a', items: [
          { title: 'Child B', url: '', id: 'b', items: [], data: {}},
        ], data: {}},
      ], data: {}};
      const uiTree = hydrateTree(data, 'my-tree');
      expect(uiTree.items[0].id).toEqual('my-tree.a');
      expect(uiTree.items[0].items[0].id).toEqual('my-tree.a.b');
    });

    it('should use the title as fallback for child IDs when id is nullish', () => {
      const data = { title: 'Root', url: '', id: undefined, items: [
        { title: 'Child A', url: '', id: undefined, items: [], data: {}},
      ], data: {}};
      const uiTree = hydrateTree(data, 'my-tree');
      expect(uiTree.items[0].id).toEqual('my-tree.Child A');
    });
  });
});
