import { RecursiveTreeKeyOfType } from '../interfaces/recursive-key';

/**
 * Traverse the tree, pre-order, right-to-left
 */
export const traverse = <T extends Record<any, any>, V extends Record<any, any> = T>(
  tree: T,
  visit: (tree: T) => V,
  key: RecursiveTreeKeyOfType<T>,
): V => {
  let stack = [
    tree,
  ];

  while(stack) {
    const el = stack.pop();
    if(!el) {
      break;
    }

    visit(el);

    stack = [
      ...stack,
      ...<T[]><unknown>el[key],
    ];
  }

  return tree;
};
