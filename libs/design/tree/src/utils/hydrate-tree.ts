import { traverse } from './traverse-tree';
import { DaffTreeData } from '../interfaces/tree-data';
import { DaffTreeUi } from '../interfaces/tree-ui';

export const daffDataTreeToUiTree = <T>(data: DaffTreeData<T>, parent: DaffTreeUi<T>, open: boolean = false): DaffTreeUi<T> => ({
  id: parent ? `${parent.id}.${data.id ?? data.title}` : (data.id ?? data.title),
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
export const hydrateTree = <T>(data: DaffTreeData<T>, treeId?: string): DaffTreeUi<T> => {
  const root: DaffTreeUi<T> = {
    id: treeId ?? (data.id ?? data.title),
    title: data.title,
    url: data.url,
    data: data.data,
    open: true,
    parent: undefined,
    items: [],
  };

  let treeStack = [
    root,
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

  return root;
};
