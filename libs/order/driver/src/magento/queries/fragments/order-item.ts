import gql from 'graphql-tag';

export const orderItemFragment = gql`
  fragment orderItem on GraycoreOrderItem {
    qty_ordered
    image
    qty_canceled
    qty_fulfilled
    order_id
    created_at
    updated_at
    product_id
    sku
    name
    weight
    qty
    price
    discount_percent
    discount_amount
    tax_percent
    tax_amount
    row_total
    row_total_with_discount
    row_weight
    tax_before_discount
  }
`;
