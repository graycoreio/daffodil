import gql from 'graphql-tag';

import { moneyFragment } from './money';

export const availableShippingMethodFragment = gql`
  fragment availableShippingMethod on AvailableShippingMethod {
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
