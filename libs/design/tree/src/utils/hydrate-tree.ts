import { DaffTreeData } from '../interfaces/tree-data';
import { DaffTreeUi } from '../interfaces/tree-ui';
import { traverse } from './traverse-tree';

export const daffDataTreeToUiTree = <T>(data: DaffTreeData<T>, parent: DaffTreeUi<T>, open: boolean = false): DaffTreeUi<T> => ({
  id: data.id ?? data.title,
  title: data.title,
  url: data.url,
  data: data.data,
  open,
  parent,
  items: [],
});

/**
 * This function translates the original data given to us by the client
 * to the internal representation of the tree used by the {@link DaffTreeComponent}
 */
export const hydrateTree = <T>(data: DaffTreeData<T>): DaffTreeUi<T> => {
  const tree = daffDataTreeToUiTree(data, undefined, true);

  let treeStack = [
    tree,
  ];

  traverse(data, (el) => {
    const treeEl = treeStack.pop();
    treeEl.items = el.items.map((i) =>  daffDataTreeToUiTree(i, treeEl, false));
    treeStack = [
      ...treeStack,
      ...treeEl.items,
    ];
    return el;
  }, 'items');

  return tree;
};
