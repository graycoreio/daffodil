import { DaffLocatable } from '@daffodil/core';

import { DaffNavigationTree } from './navigation-tree';

export interface DaffNavigationBreadcrumb extends DaffLocatable {
  id: DaffNavigationTree['id'];
  name: string;
  level: number;
}
