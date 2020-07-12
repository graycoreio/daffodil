export interface MagentoGraycoreOrderPayment {
  payment_id: number;
  order_id: number;
  method: string;
  cc_type: string;
  cc_last4: string;
  cc_owner: string;
  cc_exp_month: string;
  cc_exp_year: string;
};
