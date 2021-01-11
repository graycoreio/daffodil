import {gql} from 'apollo-angular';

export const orderBundleItemSelectedOptionFragment = gql`
  fragment orderBundleItemSelectedOption on ItemSelectedBundleOption {
    __typename
    id
    label
    values {
      __typename
      id
      product_name
    }
  }
`;

export const orderItemFragment = gql`
  fragment orderItem on OrderItemInterface {
    __typename
    id
    quantity_ordered
    quantity_canceled
    quantity_shipped
    quantity_invoiced
    product_url_key
    product_sku
    product_name
    product_type
    product_sale_price {
      value
    }
    discounts {
      amount {
        value
      }
    }
    selected_options {
      label
      value
    }
    ... on BundleOrderItem {
      bundle_options {
        ...orderBundleItemSelectedOption
      }
    }
  }
  ${orderBundleItemSelectedOptionFragment}
`;
