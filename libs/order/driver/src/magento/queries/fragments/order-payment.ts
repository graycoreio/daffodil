import gql from 'graphql-tag';

export const orderPaymentFragment = gql`
  fragment orderPayment on GraycoreOrderPayment {
    payment_id
    order_id
    method
    cc_type
    cc_last4
    cc_owner
    cc_exp_month
    cc_exp_year
  }
`;
