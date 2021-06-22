import { DaffIdentifiable } from '@daffodil/core';

export interface DaffCartShippingRate extends DaffIdentifiable {
  carrier: string;
  carrier_title: string;
  method_code: string;
  method_title: string;
  method_description: string;
  price: number;
}
