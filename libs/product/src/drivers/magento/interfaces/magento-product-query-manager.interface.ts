import { QueryOptions } from 'apollo-client';

import { DaffProductQueryManagerInterface } from '../../interfaces/product-query-manager.interface';

/**
 * Interface that must be implemented by the magento product query manager, ultimately, because sort fields cannot be
 * retrieved via the category product call.
 */
export interface DaffMagentoProductQueryManagerInterface extends DaffProductQueryManagerInterface {
  getSortFieldsAndFiltersByCategory(categoryId: string): QueryOptions;
}