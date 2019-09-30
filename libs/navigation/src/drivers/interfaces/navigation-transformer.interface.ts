import { DaffNavigationTree } from '../../models/navigation-tree';

export interface DaffNavigationTransformerInterface<T extends DaffNavigationTree> {
  transform(navigationTree: any): T;
}
