import { traverse } from './traverse-tree';
import { RecursiveTreeKeyOfType } from '../interfaces/recursive-key';
import { DaffTreeData } from '../interfaces/tree-data';

/**
 * Transform a tree-like structure in-place into a {@link DaffTreeData}.
 *
 * This will mutate the original object, hydrating with additional properties.
 *
 * @param tree - The data structure representing tree-like data.
 * @param transformFn - A user-supplied function that will transform the user
 *  type into a {@link DaffTreeData}
 * @param key - The property of the your tree that indicates which
 *  key contains the "children" of your tree structure.
 *
 */
export const daffTransformTreeInPlace = <
  // eslint-disable-next-line @typescript-eslint/no-restricted-types
  T extends Record<any,any>,
>(
  tree: T,
  transformFn: (type: T) => T & DaffTreeData<unknown>,
  key: RecursiveTreeKeyOfType<T>,
): DaffTreeData<unknown> => traverse<T, T & DaffTreeData<unknown>>(
  tree,
  (el) => {
    const r = Object.assign(el, transformFn(el));
    r.items = el[key];
    el = r;
    return <T & DaffTreeData<unknown>>el;
  },
    // This type is confusing. I don't understand why it has to be here,
    // the associated error message is incomprehensible.
    <T[string] extends T[] ? string : never>key,
);
