import { MagentoCustomerOrderSortInput } from '../../models/public_api';

export interface MagentoCustomerOrderListQueryVariables {
  currentPage?: number;
  pageSize?: number;
  sort?: MagentoCustomerOrderSortInput;
}
