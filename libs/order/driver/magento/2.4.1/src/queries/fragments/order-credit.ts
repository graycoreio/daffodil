import {gql} from 'apollo-angular';

import { orderCreditItemFragment } from './order-credit-item';
import { orderCreditTotalFragment } from './order-credit-total';

export const orderCreditFragment = gql`
  fragment orderCredit on CreditMemo {
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
