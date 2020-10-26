import gql from 'graphql-tag';

import { orderBundleItemFragment, orderItemFragment } from './order-item';

export const orderCreditItemFragment = gql`
  fragment orderCreditItem on CreditMemoItem {
    quantity_refunded
    order_item {
      ...orderItem
    }
  }
  ${orderItemFragment}
`;

export const orderCreditBundleItemFragment = gql`
  fragment orderCreditBundleItem on BundleCreditMemoItem {
    quantity_refunded
    order_item {
      ...orderBundleItem
    }
  }
  ${orderBundleItemFragment}
`;
