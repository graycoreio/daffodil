import { gql } from 'apollo-angular';

import { magentoMoneyFragment } from '@daffodil/driver/magento/2.4.7';

export const magentoCustomerStoreCreditFragment = gql`
  fragment magentoCustomerStoreCredit on CustomerStoreCredit {
    current_balance {
      ...moneyFragment
    }
    enabled
  }
  ${magentoMoneyFragment}
`;
