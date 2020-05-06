import { DaffOrder } from './order';

export interface DaffOrderShippingMethod {
  order_id: DaffOrder['id'];
  created_at: string;
  updated_at: string;
  carrier: string;
  carrier_title: string;
  code: string;
  method: string;
  method_description: string;
  method_title: string;
}
