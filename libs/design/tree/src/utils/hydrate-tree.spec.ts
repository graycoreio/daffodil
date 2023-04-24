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
});
