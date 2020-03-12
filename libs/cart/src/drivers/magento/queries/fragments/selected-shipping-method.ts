import gql from 'graphql-tag';

import { moneyFragment } from './money';

export const selectedShippingMethodFragment = gql`
  fragment selectedShippingMethod on SelectedShippingMethod {
    carrier_code
    method_code
    carrier_title
    method_title
    amount {
      ...money
    }
  }
  ${moneyFragment}
`;
