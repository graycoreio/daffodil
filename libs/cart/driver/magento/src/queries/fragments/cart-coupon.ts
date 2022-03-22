import { gql } from '@damienwebdev/apollo-angular';


export const cartCouponFragment = gql`
  fragment cartCoupon on AppliedCoupon {
    code
  }
`;
