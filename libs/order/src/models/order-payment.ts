import { DaffOrder } from './order';

export interface DaffOrderCreditCardPayment {
  payment_id: number | string;
  order_id: DaffOrder['id'];
  created_at: string;
  updated_at: string;
  method: string; //todo: actually an enum
  cc_type: string;
  cc_last4: string;
  cc_owner: string;
  cc_exp_month: string;
  cc_exp_year: string;
}

export type DaffOrderPayment = DaffOrderCreditCardPayment;
