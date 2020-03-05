export interface DaffCartShippingRate {
  id: string | number;
  carrier: string;
  carrier_title: string;
  method_code: string;
  method_title: string;
  method_description: string;
  price: number;
}
