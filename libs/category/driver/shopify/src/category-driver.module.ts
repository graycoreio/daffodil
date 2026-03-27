import { provideDaffCategoryDriver } from '@daffodil/category/driver';

import { DaffShopifyCategoryService } from './category.service';

/**
 * Provides the {@link DaffCategoryDriver} as the {@link DaffShopifyCategoryService}.
 */
export const provideDaffCategoryShopifyDriver = () =>
  provideDaffCategoryDriver(DaffShopifyCategoryService);
