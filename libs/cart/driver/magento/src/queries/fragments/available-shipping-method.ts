import { gql } from 'apollo-angular';

import { magentoMoneyFragment } from '@daffodil/driver/magento';

export const availableShippingMethodFragment = gql`
  fragment availableShippingMethod on AvailableShippingMethod {
    carrier_code
    method_code
    carrier_title
    method_title
    amount {
      ...moneyFragment
    }
  }
  ${magentoMoneyFragment}
`;
