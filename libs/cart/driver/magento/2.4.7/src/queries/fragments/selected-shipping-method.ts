import { gql } from 'apollo-angular';

import { magentoMoneyFragment } from '@daffodil/driver/magento/2.4.7';

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
