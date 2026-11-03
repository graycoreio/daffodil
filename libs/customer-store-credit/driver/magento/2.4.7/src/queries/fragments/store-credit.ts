import { gql } from 'apollo-angular';

import { magentoMoneyFragment } from '@daffodil/driver/magento';

export const magentoCustomerStoreCreditFragment = gql`
  fragment magentoCustomerStoreCredit on CustomerStoreCredit {
    current_balance {
      ...moneyFragment
    }
    enabled
  }
  ${magentoMoneyFragment}
`;
