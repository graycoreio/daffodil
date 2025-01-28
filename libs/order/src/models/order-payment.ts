import {
  DaffIdentifiable,
  ID,
} from '@daffodil/core';

import { DaffOrder } from './order';

export interface DaffOrderCreditCardPayment extends DaffIdentifiable {
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
