import { gql } from 'apollo-angular';

import { magentoMoneyFragment } from '@daffodil/driver/magento';

export const magentoCustomerOrderStoreCreditTotalFragment = gql`
  fragment magentoCustomerOrderStoreCreditTotal on CustomerOrder {
    total {
      total_store_credit {
        ...moneyFragment
      }
    }
  }
  ${magentoMoneyFragment}
`;
