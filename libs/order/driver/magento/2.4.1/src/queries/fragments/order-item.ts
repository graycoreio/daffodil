import gql from 'graphql-tag';

export const orderBundleItemSelectedOptionFragment = gql`
  fragment orderBundleItemSelectedOption on ItemSelectedBundleOption {
    label
    values {
      product_name
    }
  }
`;

export const orderItemFragment = gql`
  fragment orderItem on OrderItem {
    quantity_ordered
    quantity_canceled
    quantity_shipped
    quantity_invoiced
    product_url_key
    product_sku
    product_name
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
  }
`;

export const orderBundleItemFragment = gql`
  fragment orderBundleItem on BundleOrderItem {
    quantity_ordered
    quantity_canceled
    quantity_shipped
    quantity_invoiced
    product_url_key
    product_sku
    product_name
    product_sale_price {
      value
    }
    discounts {
      amount {
        value
      }
    }
    bundle_options {
      ...orderBundleItemSelectedOption
    }
  }
  ${orderBundleItemSelectedOptionFragment}
`;
