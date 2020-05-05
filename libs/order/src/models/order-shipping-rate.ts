export interface DaffOrderShippingRate {
  rate_id: number;
  address_id: number;
  created_at: string;
  updated_at: string;
  carrier: string;
  carrier_title: string;
  code: string;
  method: string;
  method_description: string;
  price: number;
  error_message: string;
  method_title: string;
}
