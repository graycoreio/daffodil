import { ID } from '@daffodil/core';

export interface DaffCartShippingRate {
  id: ID;
  carrier: string;
  carrier_title: string;
  method_code: string;
  method_title: string;
  method_description: string;
  price: number;
}
