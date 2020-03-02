import gql from 'graphql-tag';

import { moneyFragment } from './money';

export const productFragment = gql`
  fragment product on MagnetoProduct {
    id
    image {
      label,
      url
    }
    manufacturer
    name
    description
    price_range {
      maximum_price {
        ...money
      }
      minumum_price {
        ...money
      }
    }
    sku
  }
  ${moneyFragment}
`;
