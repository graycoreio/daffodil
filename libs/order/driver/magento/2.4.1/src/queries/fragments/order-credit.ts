import {gql} from 'apollo-angular';

import { orderCreditItemFragment } from './order-credit-item';
import { orderCreditTotalFragment } from './order-credit-total';

export const orderCreditFragment = gql`
  fragment orderCredit on CreditMemo {
    __typename
    id
    items {
      ...orderCreditItem
    }
    total {
      ...orderCreditTotal
    }
  }
  ${orderCreditItemFragment}
  ${orderCreditTotalFragment}
`;
