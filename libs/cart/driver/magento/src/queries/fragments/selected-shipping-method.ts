import { gql } from 'apollo-angular';

import { magentoMoneyFragment } from '@daffodil/driver/magento';

export const selectedShippingMethodFragment = gql`
  fragment selectedShippingMethod on SelectedShippingMethod {
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
