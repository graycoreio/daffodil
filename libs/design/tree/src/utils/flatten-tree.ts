import { collect } from '@daffodil/core';

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
  visible: boolean;
  _treeRef: DaffTreeUi<unknown>;
}

/**
 * Flatten a DaffTreeUi<unknown> into an array, removing elements from the array
 * below nodes in the tree that are not open.
 */
export const flattenTree = (daffUiTree: DaffTreeUi<unknown>, removeNodes: boolean = false): DaffTreeFlatNode[] =>  {
  const tree: DaffTreeFlatNode[] = [];
  if(!daffUiTree) {
    return [];
  }

  let items = [
    {
      ...daffUiTree,
      level: 0,
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

    items = [
      ...items,
      ...el.items.map((i) => ({
        ...i,
        level:
        el.level + 1,
        _treeRef: i,
      })).reverse(),
    ];

    const hasClosedAncestor = el._treeRef.parent
      ? collect(el._treeRef.parent, (node) => node.parent ? [node.parent] : [], el.level).reduce(
        (acc, parent) => acc || !parent.open,
        false,
      )
      : false;

    if(!removeNodes && el._treeRef.parent) {
      tree.push({
        id: el.id,
        title: el.title,
        level: el.level,
        url : el.url,
        visible: !hasClosedAncestor,
        hasChildren: el.items.length > 0,
        data: undefined,
        _treeRef: el._treeRef,
      });
    } else if(removeNodes && el._treeRef.parent?.open) {
      tree.push({
        id: el.id,
        title: el.title,
        level: el.level,
        url : el.url,
        visible: !hasClosedAncestor,
        hasChildren: el.items.length > 0,
        data: undefined,
        _treeRef: el._treeRef,
      });
    }
  }

  return tree;
};
