import { DaffNavigationTree } from '@daffodil/navigation';

import { CategoryNode } from '../models/public_api';

/**
 * A transform for the Magento driver that can add extra fields or otherwise modify the navigation driver response.
 */
export type MagentoNavigationTreeTransform<T extends CategoryNode = CategoryNode, V extends DaffNavigationTree = DaffNavigationTree> =
  (daffTree: DaffNavigationTree, magentoCategoryNode: T) => V;
