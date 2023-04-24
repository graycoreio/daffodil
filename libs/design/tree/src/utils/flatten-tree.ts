import { DaffTreeUi } from '../interfaces/tree-ui';

/**
 * A flattened node of a tree. This is used when translating the tree data
 * structure into an array.
 */
export interface DaffTreeFlatNode {
  id: number | string;
  title: string;
  url: string;
  level: number;
  hasChildren: boolean;
  data: unknown;
  _treeRef: DaffTreeUi<unknown>;
}

/**
 * Flatten a DaffTreeUi<unknown> into an array, removing elements from the array
 * below nodes in the tree that are not open.
 */
export const flattenTree = (daffUiTree: DaffTreeUi<unknown>): DaffTreeFlatNode[] =>  {
  const tree: DaffTreeFlatNode[] = [];

  let items = [
    {
      ...daffUiTree,
      title: 'Root',
      level: 0,
      url: '/',
      data: undefined,
      open: true,
      _treeRef: daffUiTree,
    },
  ];


  while(items) {
    const el = items.pop();
    if(!el) {
      break;
    }

    if(el.open) {
      items = [
        ...items,
        ...el.items.map((i) => ({
          ...i,
          level:
          el.level + 1,
          _treeRef: i,
        })).reverse(),
      ];
    }

    if(el._treeRef.parent?.open) {
      tree.push({
        id: el.id,
        title: el.title,
        level: el.level,
        url : el.url,
        hasChildren: el.items.length > 0,
        data: undefined,
        _treeRef: el._treeRef,
      });
    }
  }

  return tree;
};
