import { gql } from 'apollo-angular';

import { magentoMoneyFragment } from '@daffodil/driver/magento';

export const magentoCartStoreCreditFragment = gql`
  fragment magentoCartStoreCredit on Cart {
    applied_store_credit {
      applied_balance {
        ...moneyFragment
      }
      enabled
    }
  }
  ${magentoMoneyFragment}
`;
