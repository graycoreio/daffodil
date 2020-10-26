import gql from 'graphql-tag';

import { orderCreditItemFragment, orderCreditBundleItemFragment } from './order-credit-item';
import { orderCreditTotalFragment } from './order-credit-total';

export const orderCreditFragment = gql`
  fragment orderCredit on CreditMemo {
    items {
      ...orderCreditItem
      ...orderCreditBundleItem
    }
    total {
      ...orderCreditTotal
    }
  }
  ${orderCreditItemFragment}
  ${orderCreditBundleItemFragment}
  ${orderCreditTotalFragment}
`;
