import gql from 'graphql-tag';

export const cartCouponFragment = gql`
  fragment cartCoupon on MagnetoCartCoupon {
    code
  }
`;
