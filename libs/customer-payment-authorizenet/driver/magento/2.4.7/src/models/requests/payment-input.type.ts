export interface MagentoTokenBaseCardPaymentInput {
  __typename?: 'TokenBaseCardPaymentInput';
  cc_owner?: string;
  cc_type?: string;
  cc_last4?: string;
  cc_number?: string;
  cc_cid?: string;
  cc_exp_year?: string;
  cc_exp_month?: string;
  acceptjs_key?: string;
  acceptjs_value?: string;
}
