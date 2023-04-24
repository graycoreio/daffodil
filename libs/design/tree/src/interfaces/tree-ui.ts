import { DaffTreeData } from './tree-data';

/**
 * A DaffTreeUi is the internal data structure used during tree rendering.
 *
 * This is an internal implementation detail type that.
 */
export interface DaffTreeUi<T> extends DaffTreeData<T> {
  open: boolean;
  items: DaffTreeUi<T>[];
  parent: DaffTreeUi<T>;
}
