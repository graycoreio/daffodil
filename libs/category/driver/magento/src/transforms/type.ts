import { DaffCategory } from '@daffodil/category';
import { MagentoProduct } from '@daffodil/product/driver/magento';

import { MagentoCategory } from '../models/public_api';

/**
 * A transform for the Magento driver that can add extra fields or otherwise modify the category driver response.
 */
export type MagentoCategoryTreeTransform<T extends MagentoCategory = MagentoCategory, V extends DaffCategory = DaffCategory> =
  (daffCategory: DaffCategory, magentoCategory: T, products: MagentoProduct[]) => V;
