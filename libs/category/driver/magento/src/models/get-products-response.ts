import { MagentoProduct } from '@daffodil/product/driver/magento';

import {
  MagentoAggregation,
  MagentoSortFields,
} from '../models/public_api';
import { MagentoPageInfo } from './page-info';

export interface MagentoGetProductsResponse {
  products: {
    items: MagentoProduct[];
    page_info: MagentoPageInfo;
    total_count: number;
    aggregations: MagentoAggregation[];
    sort_fields: MagentoSortFields;
  };
}
