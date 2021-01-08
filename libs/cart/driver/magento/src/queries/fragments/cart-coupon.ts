import {gql} from 'apollo-angular';


export const cartCouponFragment = gql`
  fragment cartCoupon on AppliedCoupon {
    code
  }
`;
